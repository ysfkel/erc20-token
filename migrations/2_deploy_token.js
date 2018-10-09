var MyToken = artifacts.require('./MyToken.sol');

module.exports = function(deployer) {
    const _name = "My Token";
    const _symbol = "MTK";
    const _decimal = 18;
    
    deployer.deploy(MyToken, _name, _symbol, _decimal);
}