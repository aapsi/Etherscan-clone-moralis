//  our backend server
const express = require("express");
const app = express()
const port = 4000;
const Moralis = require("moralis").default;
const cors = require("cors");

require("dotenv").config({ path: ".env" });

app.use(cors(

));

app.use(express.json());

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
console.log(MORALIS_API_KEY)

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})


// // creating an endpoint to get the current price of ether
// app.get("/getethprice", async (req, res) => {
//     try {
//         const response = await Moralis.EvmApi.token.getTokenPrice({
//             address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
//             chain: "0x1"
//         });
//         console.log(response)
//         return res.status(200).json(response);
//     }
//     catch(error) {
//         console.log(`Something went wrong ! ${error}`);
//         return res.status(400).json();
//     }

// });

// // end point to fetch block info
// app.get("/getblockinfo", async (req, res) => {
//     // Fetch information of the closest block to a specific date.
//     try {
//       const latestBlock = await Moralis.EvmApi.block.getDateToBlock({
//         date: Date.now(),
//         chain: "0x1",
//       });
//               // we need the block number to display it on the site and also
//         // we need it to make a call to the get block by hash function and to  get parent blocks

//         // After fetching the information about the latest block, the code needs to retrieve information about the previous blocks.
//         //  It does this in a loop, where it iterates through the previous blocks, starting from the latest block.
//         // It uses the Moralis.EvmApi.block.getBlock() method to get information about 
//         // a specific block based on its block number or parent hash.
//         // Inside the loop, it extracts various details about each block, including the block number,
//         //  total transactions, gas used, miner, and timestamp. 
//         //  It also collects transaction details for the first block (i = 0), 
//         //  such as transaction hashes, timestamps, sender addresses, and receiver addresses.
//         // This information is collected in the previousBlockInfo array.
  
//       let blockNrOrParentHash = latestBlock.toJSON().block;
//       let previousBlockInfo = [];
  
//       for (let i = 0; i < 5; i++) {
//         const previousBlockNrs = await Moralis.EvmApi.block.getBlock({
//           chain: "0x1",
//           blockNumberOrHash: blockNrOrParentHash,
//         });
  
//         blockNrOrParentHash = previousBlockNrs.toJSON().parent_hash;
//         if (i == 0) {
//           previousBlockInfo.push({
//             transactions: previousBlockNrs.toJSON().transactions.map((i) => {
//               return {
//                 transactionHash: i.hash,
//                 time: i.block_timestamp,
//                 fromAddress: i.from_address,
//                 toAddress: i.to_address,
//                 value: i.value,
//               };
//             }),
//           });
//         }
//         previousBlockInfo.push({
//           blockNumber: previousBlockNrs.toJSON().number,
//           totalTransactions: previousBlockNrs.toJSON().transaction_count,
//           gasUsed: previousBlockNrs.toJSON().gas_used,
//           miner: previousBlockNrs.toJSON().miner,
//           time: previousBlockNrs.toJSON().timestamp,
//         });
//       }
  
//       const response = {
//         latestBlock: latestBlock.toJSON().block,
//         previousBlockInfo,
//       };
  
//       return res.status(200).json(response);
//     } catch (e) {
//       console.log(`Somthing went wrong ${e}`);
//       return res.status(400).json();
//     }
//   });
  


// // end point for getting data and transactions
// // here we will send wallet address from the frontend to the backend client
// app.get("/address", async(req,res) => {
//     try {
//         const {query} = req;
//         const chain = "0x1";

//         const response = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
//             address: query.address,
//             chain,
//         })

//         return res.status(200).json(response);

//     } catch(error) {
//         console.log(`Something went wrong ${error}`)
//         return res.status(400).json();
//     }
// });

Moralis.start({
    apiKey: MORALIS_API_KEY
}).then(()=> {
    app.listen(port, () => {
        console.log(`Listening for server on port ${port}`)
  
    })
})

module.exports = app

