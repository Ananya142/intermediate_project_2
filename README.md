**Overview**

 The project allow us to develop a contract called MyToken with Solidity. Users can create tokens and send them to different addresses. The project consists of a Solidity smart contract and a basic frontend interface made with HTML, JavaScript, and Web3.js for user interaction.

**Functions**

**- constructor(uint256 initialSupply):** Sets up the token with an initial supply.

**- transfer(address to, uint256 amount):** Permits the transfer of tokens between addresses, making sure there is enough balance.

**(mapping(address => uint256) public balanceOf::** This balance of fumction tracks the balance of tokens for each address.

**Frontented Interface**

- The HTML file (index.html) contains a basic form where users can enter the recipient's address and the amount of tokens they want to transfer. There is also a button for initiating the transfer.

- In the JavaScript file (app.js), Web3.js is used to communicate with the smart contract deployed on a blockchain network. It manages token transfers by linking to the user's wallet (such as MetaMask) for signing and confirming transactions.

**Code (Solidity contract)**

```
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
```
**Usage**

To compile the contract, go to the "Solidity Compiler" tab in Remix IDE and select the appropriate compiler version, such as 0.8.26. Click on "Compile MyToken.sol" to compile the contract. Then, switch to the "Deploy & Run Transactions" tab to deploy the compiled contract. Once the contract is deployed, the contract owner can interact with Function.

Updated app.js file by swapping out the contract API with your own after compiling the contract on remix idle. Also, swapped the contract address with the new one after deploying the contract on remix.

**License** This project is licensed under the MIT License.
