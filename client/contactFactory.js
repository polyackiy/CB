import {ethers} from "ethers";
import provider from "./provider";

const address = "0xce996A4bb4b3A77300c4A7A5C30dE94Af3e7BFC2";
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_telegram",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_discord",
                "type": "string"
            }
        ],
        "name": "createContact",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "ownerToContact",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const contactFactory = new ethers.Contract(address, abi, provider);

export default contactFactory;