// app.js

window.addEventListener('load', async () => {
    // Check if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        alert('Please install MetaMask to use this DApp!');
        return;
    }

    // Connect to MetaMask
    await ethereum.request({ method: 'eth_requestAccounts' });

    const account = (await web3.eth.getAccounts())[0];
    document.getElementById('account').innerText = account;

    const contractAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    const abi =[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "initialSupply",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const myTokenContract = new web3.eth.Contract(abi, contractAddress);

    const balance = await myTokenContract.methods.balanceOf(account).call();
    document.getElementById('balance').innerText = web3.utils.fromWei(balance, 'ether');

    document.getElementById('transferForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const toAddress = document.getElementById('toAddress').value;
        const amount = web3.utils.toWei(document.getElementById('amount').value, 'ether');

        await myTokenContract.methods.transfer(toAddress, amount).send({ from: account });

        const updatedBalance = await myTokenContract.methods.balanceOf(account).call();
        document.getElementById('balance').innerText = web3.utils.fromWei(updatedBalance, 'ether');
    });
});
