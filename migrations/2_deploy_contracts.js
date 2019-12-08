var ReviewSystem = artifacts.require("./ReviewSystem.sol");
var ReviewSystemTest = artifacts.require("./ReviewSystemTest.sol");

module.exports = function(deployer) {
    //deployer.deploy(ReviewSystem)
    deployer.deploy(ReviewSystemTest)
}
