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

/*
const abi = [ { inputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor',
  constant: undefined },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'writeReview',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xd5b24d81' },
{ constant: false,
  inputs: [ [Object], [Object], [Object] ],
  name: 'writeReview',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x82d62737' },
{ constant: false,
  inputs: [ [Object] ],
  name: 'upVote',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xec859db5' },
{ constant: false,
  inputs: [ [Object] ],
  name: 'downVote',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x1ae9392d' },
{ constant: false,
  inputs: [],
  name: 'createNewUser',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x50afb452' },
{ constant: false,
  inputs: [ [Object] ],
  name: 'createNewBusiness',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xa0e70466' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'addManager',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x38cf0b15' },
{ constant: false,
  inputs: [ [Object], [Object], [Object], [Object] ],
  name: 'createNewReviewable',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x4c459b80' },
{ constant: false,
  inputs: [ [Object], [Object], [Object] ],
  name: 'createNewReviewToken',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xb478e192' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'createNewReviewToken',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x077247b1' },
{ constant: false,
  inputs: [ [Object] ],
  name: 'createNewReviewToken',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xd9c4abe6' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'sendReviewToken',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xb8a74fa6' },
{ constant: false,
  inputs: [ [Object], [Object], [Object] ],
  name: 'createReward',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function',
  signature: '0xa8a6a202' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'changeAuthentification',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x5c837f17' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'addFunds',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function',
  signature: '0x85f45250' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'payReview',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x58f911d3' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'giveReward',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0xa95ff429' },
{ constant: false,
  inputs: [ [Object], [Object] ],
  name: 'managerReply',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x4cf2e34b' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getReview',
  outputs:
   [ [Object],
     [Object],
     [Object],
     [Object],
     [Object],
     [Object],
     [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x990581b6' },
{ constant: true,
  inputs: [ [Object], [Object] ],
  name: 'userVotedOnReview',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x6610d9f8' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getReviewable',
  outputs: [ [Object], [Object], [Object], [Object], [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0xa1c88b3c' },
{ constant: true,
  inputs: [ [Object], [Object] ],
  name: 'getReviewIDsFromReviewable',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x9cebb6dc' },
{ constant: true,
  inputs: [ [Object], [Object] ],
  name: 'didConsumerReview',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x8072a953' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getBussinessReviewables',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0xdafe0a84' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getUserInfo',
  outputs: [ [Object], [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x6386c1c7' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getUserReviews',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x18d0e8b2' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getRewardInfo',
  outputs: [ [Object], [Object], [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x243d3827' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'getRewardData',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x8faea73a' } 
];
*/

//const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const mnemonic = 'clean bicycle nasty escape card inmate scorpion dragon cradle immune coast rookie';
//const abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addFunds","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"address","name":"newManager","type":"address"}],"name":"addManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needs","type":"bool"}],"name":"changeAuthentification","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"createNewBusiness","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"}],"name":"createNewReviewable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"createNewUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"createReward","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"consumer","type":"address"}],"name":"didConsumerReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"downVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"}],"name":"getBussinessReviewables","outputs":[{"internalType":"uint256[]","name":"reviewableIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"getReview","outputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"upvotes","type":"uint256"},{"internalType":"uint256","name":"downvotes","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"reply","type":"string"},{"internalType":"uint256","name":"timeWritten","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewIDsFromReviewable","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewable","outputs":[{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"},{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"uint256","name":"funds","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardData","outputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReviews","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"giveReward","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"string","name":"content","type":"string"}],"name":"managerReply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"payReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewTokenID","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"sendReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"upVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"userVotedOnReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"reviewTokenID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
//const abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addFunds","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"address","name":"newManager","type":"address"}],"name":"addManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needs","type":"bool"}],"name":"changeAuthentification","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"createNewBusiness","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"}],"name":"createNewReviewable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"createNewUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"createReward","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"consumer","type":"address"}],"name":"didConsumerReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"downVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"}],"name":"getBussinessReviewables","outputs":[{"internalType":"uint256[]","name":"reviewableIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"getReview","outputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"upvotes","type":"uint256"},{"internalType":"uint256","name":"downvotes","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"reply","type":"string"},{"internalType":"uint256","name":"timeWritten","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewIDsFromReviewable","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewable","outputs":[{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"},{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"uint256","name":"funds","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardData","outputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReviews","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"giveReward","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"string","name":"content","type":"string"}],"name":"managerReply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"payReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewTokenID","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"sendReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"upVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"userVotedOnReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"reviewTokenID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addFunds","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"address","name":"newManager","type":"address"}],"name":"addManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needs","type":"bool"}],"name":"changeAuthentification","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"createNewBusiness","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"needsOwner","type":"bool"},{"internalType":"address","name":"owner","type":"address"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"createNewReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"}],"name":"createNewReviewable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"createNewUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"createReward","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"consumer","type":"address"}],"name":"didConsumerReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"downVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"bussinessID","type":"uint256"}],"name":"getBussinessReviewables","outputs":[{"internalType":"uint256[]","name":"reviewableIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"getReview","outputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"upvotes","type":"uint256"},{"internalType":"uint256","name":"downvotes","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"reply","type":"string"},{"internalType":"uint256","name":"timeWritten","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewIDsFromReviewable","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"getReviewable","outputs":[{"internalType":"bool","name":"needsAuthentication","type":"bool"},{"internalType":"uint256","name":"costToReview","type":"uint256"},{"internalType":"uint256","name":"costToVote","type":"uint256"},{"internalType":"uint256","name":"bussinessID","type":"uint256"},{"internalType":"uint256","name":"funds","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardData","outputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"getRewardInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReviews","outputs":[{"internalType":"uint256[]","name":"reviewIDs","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"rewardID","type":"uint256"}],"name":"giveReward","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"string","name":"content","type":"string"}],"name":"managerReply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"payReview","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewTokenID","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"sendReviewToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"}],"name":"upVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"reviewID","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"userVotedOnReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"},{"internalType":"uint256","name":"reviewTokenID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"reviewableID","type":"uint256"}],"name":"writeReview","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const provider = new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws/a468ceeb8d374b00bed205d1d0e9d3b7");

const web3 = new Web3(provider);
const ProtoReviewSystem = new web3.eth.Contract(abi, '0x1Cb2e5AfacBEbca56c287105303F15474272EbC0');


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

//const truffleFile = JSON.parse(JSON.stringify(protoReviewSystem));
//abi = '[{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": false, "inputs": [ { "name": "content", "type": "string" }, { "name": "reviewableID", "type": "uint256" } ], "name": "writeReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "content", "type": "string" }, { "name": "reviewableID", "type": "uint256" }, { "name": "reviewTokenID", "type": "uint256" } ], "name": "writeReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "upVote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "downVote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "createNewUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "manager", "type": "address" } ], "name": "createNewBusiness", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "bussinessID", "type": "uint256" }, { "name": "newManager", "type": "address" } ], "name": "addManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "bussinessID", "type": "uint256" }, { "name": "needsAuthentication", "type": "bool" }, { "name": "costToReview", "type": "uint256" }, { "name": "costToVote", "type": "uint256" } ], "name": "createNewReviewable", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needsOwner", "type": "bool" }, { "name": "owner", "type": "address" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needsOwner", "type": "bool" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" } ], "name": "createNewReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewTokenID", "type": "uint256" }, { "name": "newOwner", "type": "address" } ], "name": "sendReviewToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "data", "type": "bytes" }, { "name": "amount", "type": "uint256" } ], "name": "createReward", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "needs", "type": "bool" } ], "name": "changeAuthentification", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "name": "addFunds", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "amount", "type": "uint256" } ], "name": "payReview", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "rewardID", "type": "uint256" } ], "name": "giveReward", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "content", "type": "string" } ], "name": "managerReply", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewID", "type": "uint256" } ], "name": "getReview", "outputs": [ { "name": "content", "type": "string" }, { "name": "upvotes", "type": "uint256" }, { "name": "downvotes", "type": "uint256" }, { "name": "reviewableID", "type": "uint256" }, { "name": "author", "type": "address" }, { "name": "reply", "type": "string" }, { "name": "timeWritten", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewID", "type": "uint256" }, { "name": "user", "type": "address" } ], "name": "userVotedOnReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" } ], "name": "getReviewable", "outputs": [ { "name": "needsAuthentication", "type": "bool" }, { "name": "costToReview", "type": "uint256" }, { "name": "costToVote", "type": "uint256" }, { "name": "bussinessID", "type": "uint256" }, { "name": "funds", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "amount", "type": "int256" } ], "name": "getReviewIDsFromReviewable", "outputs": [ { "name": "reviewIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "reviewableID", "type": "uint256" }, { "name": "consumer", "type": "address" } ], "name": "didConsumerReview", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "bussinessID", "type": "uint256" } ], "name": "getBussinessReviewables", "outputs": [ { "name": "reviewableIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getUserInfo", "outputs": [ { "name": "level", "type": "uint256" }, { "name": "value", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "user", "type": "address" } ], "name": "getUserReviews", "outputs": [ { "name": "reviewIDs", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "rewardID", "type": "uint256" } ], "name": "getRewardInfo", "outputs": [ { "name": "amount", "type": "uint256" }, { "name": "reviewableID", "type": "uint256" }, { "name": "active", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "rewardID", "type": "uint256" } ], "name": "getRewardData", "outputs": [ { "name": "data", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }]'/
//abi = truffleFile['abi'];

//address = '0x1f2cfc4651437EF1D88B95C5cfe2f52E393446Bd';

/*
const options = {
  contracts: [protoReviewSystem],
  web3: {
    customProvider: function() {
      return new HDWalletProvider(MNEMONIC, "wss://ropsten.infura.io/ws/a468ceeb8d374b00bed205d1d0e9d3b7", 0, 10)
    },
    },
    //fallback: {
    //  type: 'wss',
    //  url: 'wss://ropsten.infura.io/v3/a468ceeb8d374b00bed205d1d0e9d3b7'
    //},
};
*/


/*
const options = {
  contracts: [protoReviewSystem],
  web3: {
    fallback: {
      type: "ws",
      url: "wss://ropsten.infura.io/ws/a468ceeb8d374b00bed205d1d0e9d3b7"
      //url: "ws://127.0.0.1:8545",
    },
  },
};
*/

//const drizzleStore = generateStore(options);
//const drizzle = new Drizzle(options, drizzleStore);
AppRegistry.registerComponent(appName, () => () => <App contract={ProtoReviewSystem} web3={web3}/>);