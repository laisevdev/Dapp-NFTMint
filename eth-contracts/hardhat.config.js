require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.13",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};