import { Web3Provider } from '@ethersproject/providers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ethers } from 'ethers'
import web3 from 'web3'

import { ERC721DonationsAddress } from '../config'

import ERC721Donations from '../artifacts/contracts/ERC721Donations.sol/ERC721Donations.json';

const donate = (provider, tokenAddress, tokenId) => {
    const signer = provider.getSigner();

    console.log('donate ', provider, tokenAddress, tokenId);
    const donateContract = new ethers.Contract(ERC721DonationsAddress, ERC721Donations, signer);
    
   console.log("donateContract: ", donateContract);
    let transaction = await donateContract.donate(
        provider.library,
        0,
        tokenAddress,
        tokenId,
        (new Date()).toISOString()
    );

    const tx = await transaction.wait();
    console.log("tx:", tx);
    if (tx.events.length < 1) {
        console.error('tx has no events. tx: ', tx);
    }
}

export {
    donate
}