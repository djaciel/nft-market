require('@nomiclabs/hardhat-waffle');

require('dotenv').config();

const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL || 'https://polygon-mumbai.alchemyapi.io/v2/your-api-key';

const POLYGON_MAINNET_RPC_URL =
  process.env.POLYGON_MAINNET_RPC_URL || 'https://polygon-mainnet.alchemyapi.io/v2/your-api-key';

const PRIVATE_KEY = process.env.PRIVATE_KEY || 'your private key';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: POLYGON_MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  solidity: '0.8.4',
};
