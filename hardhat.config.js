require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  'https://polygon-mumbai.alchemyapi.io/v2/your-api-key';

const POLYGON_MAINNET_RPC_URL =
  process.env.POLYGON_MAINNET_RPC_URL ||
  'https://polygon-mainnet.alchemyapi.io/v2/your-api-key';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    mainnet: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
  }
  solidity: "0.8.4",
};
