// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const isDev  = true;

  if (isDev) {
    const ERC721Test1 = await hre.ethers.getContractFactory("ERC721Test1");
    const eRC721Test1 = await ERC721Test1.deploy();
  
    await eRC721Test1.deployed();
  
    console.log("ERC721Test1 deployed to:", eRC721Test1.address);

    const ERC721Test2 = await hre.ethers.getContractFactory("ERC721Test2");
    const eRC721Test2 = await ERC721Test2.deploy();
  
    await eRC721Test2.deployed();
  
    console.log("ERC721Test2 deployed to:", eRC721Test2.address);

  }
  
  const StardustToken = await hre.ethers.getContractFactory("StardustToken");
  const stardustToken = await StardustToken.deploy();

  await stardustToken.deployed();

  console.log("StardustToken deployed to:", stardustToken.address);

  const ERC721Donations = await hre.ethers.getContractFactory("ERC721Donations");
  const donations = await ERC721Donations.deploy(stardustToken.address);

  await donations.deployed();

  console.log("ERC721Donations deployed to:", donations.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
