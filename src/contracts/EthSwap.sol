pragma solidity ^0.5.0;


import "./Token.sol";

/**
 * The EthSwap contract does this and that...
 */
contract EthSwap {
  string public name = 'Hello World';
  Token public token;

  constructor(Token _token) public {
  	token = _token;
  }
}

