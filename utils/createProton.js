import { Web3Provider } from '@ethersproject/providers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ethers } from 'ethers'
import web3 from 'web3'

import ProtonB from '../deployments/polygon/ProtonB.json'

const client = ipfsHttpClient('https://www.storj-ipfs.com/api/v0/add');

export async function uploadImageToIPFS(file) {

    const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
    });
    return `https://www.storj-ipfs.com/ipfs/${added.path}`;
}

export async function createProton(address, provider, name, description, fileUrl, price)  {

    if (!name || !description || !fileUrl || !price) {
        console.error('Error: missing data: ', name, description, fileUrl, price);
        return;
    }

    try {
        /* first, upload to IPFS */
        const data = JSON.stringify({
            name,
            description,
            image: fileUrl,
        });
        const added = await client.add(data);
        const url = `https://www.storj-ipfs.com/ipfs/${added.path}`;
        // todo: remove dev mode
        // const url = "https://www.storj-ipfs.com/ipfs/QmURfH4SppoP4ypXYgCnUJkuneaRNjRYcJxQG4eEKsrq3W";
        console.log('creating sale: ', url, price, address);
        createProtonForSale(url, price, address, provider);
    } catch (error) {
        console.log(`Error uploading file: ${error}`);
    }
}

async function createProtonForSale(url, price, address, provider) {
    const signer = provider.getSigner();

    console.log('create nft 1', url, price, address);
    /* next, create the item */
    const protonContract = new ethers.Contract(ProtonB.address, ProtonB.abi, signer);
    
   console.log("protonContract: ", protonContract);
    let transaction = await protonContract['createProtonForSale(address,address,string,uint256,uint256,uint256)'](
        address,
        address,
        url,
        600,
        300,
        web3.utils.toWei(price)
    );

    const tx = await transaction.wait();
    console.log("tx:", tx);
    if (tx.events.length < 1) {
        console.error('tx has no events. tx: ', tx);
        return;
    }
    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber();
    console.log('token id: ', tokenId);
}