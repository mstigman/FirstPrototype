var ReviewSystem = artifacts.require("./ReviewSystem.sol");
var protoReviewSystem = artifacts.require("./protoReviewSystem.sol");

module.exports = function(deployer) {
    deployer.deploy(ReviewSystem)
    deployer.deploy(protoReviewSystem)
}
