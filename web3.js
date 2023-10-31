// Commands for you to execute in interactive node window
// If you want, you can also deploy it in a simple web app
const Web3 = require('web3')
// Get the endpoint under the correct test net in Infura
var web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/c8307f509144451ea0915ecc9b318cc0"));
// Get your contract's deployed address, access that through the link in Remix console.
const address = "0x37A6EC1d7E37f7a1c07E77a969d50E5935b48815";
// Your contract's ABI, from Remix IDE
[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_companyAccount",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "gasValue",
				"type": "uint256"
			}
		],
		"name": "applyPenalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "companyAccount",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gasThreshold",
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
		"name": "getBalance",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "penaltyAmount",
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
				"internalType": "uint256",
				"name": "_newThreshold",
				"type": "uint256"
			}
		],
		"name": "setGasThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// Get properties regarding the function calls
web3.eth.getBalance
// Specify your contract
const myContract = new web3.eth.Contract(ABI, address)
// Async call to get the contract's balance, interacting with the contract
myContract.methods.balance().call().then(console.log)
