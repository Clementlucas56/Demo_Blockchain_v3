
var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");
var Storage = artifacts.require("./Storage.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(HelloEthSalon);
  deployer.deploy(Storage);

};
