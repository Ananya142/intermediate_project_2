// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    // Public variables to store the token name, symbol, decimals, and total supply
    string public name = "MyToken";
    string public symbol = "MTK";
    uint256 public decimals = 18;
    uint256 public totalSupply;

     // Mapping to store the balance of each address
    mapping(address => uint256) public balanceOf;

     // Constructor function to initialize the contract with an initial supply of tokens
    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
    }
     // Function to transfer tokens from the caller's address to another address
    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }
}
