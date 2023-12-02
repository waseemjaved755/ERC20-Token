require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/25dbaac10f6c4e0eb9ecf830681ed72e',
      accounts: ['c6f3db16019d1d27b3672122390bfdeec597e70abd0377ed72e1f9807858258e']
    }
  }
};
