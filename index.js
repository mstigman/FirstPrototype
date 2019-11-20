/**
 * @format
 */
import "./shims.js";
import "./shim.js"
import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";

import React from "react";
import { Drizzle, generateStore } from "drizzle";
import protoReviewSystem  from "./build/contracts/protoReviewSystem.json";
import console from "console";




const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const mnemonic = 'clean bicycle nasty escape card inmate scorpion dragon cradle immune coast rookie';



const provider = new HDWalletProvider(mnemonic, new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7"));
const web3 = new Web3(provider);

/*
async function web3Helper(provider= new HDWalletProvider(
  mnemonic,
  new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7")
)) {
  var web3 = new Web3(provider);
  return new Promise((resolve, reject) => {
    if (web3) {
      return resolve(web3);
    } else {
      return reject();
    }
  })
}


const web3 = web3Helper();
*/

//const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7');
//const web3 = new Web3(provider);
//const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/a468ceeb8d374b00bed205d1d0e9d3b7"));

//var hd = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/a468ceeb8d374b00bed205d1d0e9d3b7", 3);    
//const web3 = new Web3(hd);

const truffleFile = JSON.parse(JSON.stringify(protoReviewSystem));
//abi = '[{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [ { "name": "content", "type": "string" }, { "name": "reviewableID", "type": "uint256" } ], "name": "writeReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "content", "type": "string" }, { "name": "reviewableID", "type": "uint256" }, { "name": "reviewTokenID", "type": "uint256" } ], "name": "writeReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "upVote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "downVote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "createNewUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "manager", "type": "address" } ], "name": "createNewBusiness", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "bussinessID", "type": "uint256" }, { "name": "newManager", "type": "address" } ], "name": "addManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "bussinessID", "type": "uint256" }, { "name": "needsAuthentication", "type": "bool" }, { "name": "costToReview", "type": "uint256" }, { "name": "costToVote", "type": "uint256" } ], "name": "createNewReviewable", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needsOwner", "type": "bool" }, { "name": "owner", "type": "address" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needsOwner", "type": "bool" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewTokenID", "type": "uint256" }, { "name": "newOwner", "type": "address" } ], "name": "sendReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "data", "type": "bytes" }, { "name": "amount", "type": "uint256" } ], "name": "createReward", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needs", "type": "bool" } ], "name": "changeAuthentification", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "name": "addFunds", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "name": "payReview", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "rewardID", "type": "uint256" } ], "name": "giveReward", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "content", "type": "string" } ], "name": "managerReply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "getReview", "outputs": [ { "name": "content", "type": "string" }, { "name": "upvotes", "type": "uint256" }, { "name": "downvotes", "type": "uint256" }, { "name": "reviewableID", "type": "uint256" }, { "name": "author", "type": "address" }, { "name": "reply", "type": "string" }, { "name": "timeWritten", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "user", "type": "address" } ], "name": "userVotedOnReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" } ], "name": "getReviewable", "outputs": [ { "name": "needsAuthentication", "type": "bool" }, { "name": "costToReview", "type": "uint256" }, { "name": "costToVote", "type": "uint256" }, { "name": "bussinessID", "type": "uint256" }, { "name": "funds", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "amount", "type": "int256" } ], "name": "getReviewIDsFromReviewable", "outputs": [ { "name": "reviewIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "consumer", "type": "address" } ], "name": "didConsumerReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "bussinessID", "type": "uint256" } ], "name": "getBussinessReviewables", "outputs": [ { "name": "reviewableIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getUserInfo", "outputs": [ { "name": "level", "type": "uint256" }, { "name": "value", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getUserReviews", "outputs": [ { "name": "reviewIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "rewardID", "type": "uint256" } ], "name": "getRewardInfo", "outputs": [ { "name": "amount", "type": "uint256" }, { "name": "reviewableID", "type": "uint256" }, { "name": "active", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "rewardID", "type": "uint256" } ], "name": "getRewardData", "outputs": [ { "name": "data", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }]'
abi = truffleFile['abi'];

address = '0x1f2cfc4651437EF1D88B95C5cfe2f52E393446Bd';

const options = {
  contracts: [
    //protoReviewSystem,
    {
      contractName: "protoReviewSystem",
      web3Contract: new web3.eth.Contract(abi, address, {from: '0x4c5657fa09F2B949F0373051bd0B7f03c41e24dd'})
    }
  ],
  web3: {
    customProvider: function() {
      return new HDWalletProvider(mnemonic, new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7"))
    },
    //fallback: {
    //  type: 'wss',
    //  url: 'wss://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7'
    //},
  },
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle} web3={web3} />);