const Web3 = require('web3')
const web3 = new Web3('http://127.0.0.1:8545')

const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
  // truffle's contract instance currently uses web3@1.2.9
  deployer.deploy(SimpleStorage, 1).then(async contract => {
    const contractBalance = await web3.eth.getBalance(contract.address)
    console.log(`Contract balance is: ${contractBalance}`)
  });
};
