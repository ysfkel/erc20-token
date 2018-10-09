pragma solidity 0.4.24;
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";


contract MyToken is StandardToken, DetailedERC20 {

    constructor (string _name, string _symbol, uint8 _decimal) 
      DetailedERC20(_name, _symbol, _decimal)
      public 
    {
         
    }
}
