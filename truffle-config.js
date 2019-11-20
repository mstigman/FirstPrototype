const path = require("path");
var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'clean bicycle nasty escape card inmate scorpion dragon cradle immune coast rookie';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7", 0, 10)
      },
      network_id: 3,
    },
    network_id: 3,
    gas: 4000000
  }
};
