//import ethers from hardhat because hardhat comes built in with ether.js

const { ethers } = require("hardhat");

// since we are going to make network calls
async function main () {

    // Need to get the Contract we are deploying to rinkeby

    /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */

    const whitelistContract = await ethers.getContractFactory("Whitelist");

    // here we deploy the contract
    const deployedWhitelistContract = await whitelistContract.deploy(10);
    // 10 is the Maximum number of whitelisted addresses allowed

    // Wait for it to finish deploying
    await deployedWhitelistContract.deployed(); 

    // print the address of the deployed contract
    console.log(`deployed Contract Address is : ${deployedWhitelistContract.address}`);

    // Call the main function and catch if there is any error

}
main()
        .then(() => process.exit(0))
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });



