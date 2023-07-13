require("dotenv").config();

require ("hardhat-watcher");

module.exports = {
  solidity: "0.8.13",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
    },
    test: {
      tasks: [{ command: "test", params: { testFiles: ["{path}"] } }],
      files: ["./test/**/*"],
      verbose: true,
    },
  },
};