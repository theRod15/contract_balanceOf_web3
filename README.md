# web3-contract-balanceOf

This is an example of getting the balance of a contract address (code can be found in `migrations/2_deploy_contracts.js`)

## Running this Code

1. `npm i`
2. Start a ganache instance (e.g. running `ganache-cli` in a terminal)
3. `npx truffle migrate`
4. After all the output from deploying the contracts, you should see: `Contract balance is: 0` e.g.:

```bash
2_deploy_contracts.js
=====================

   Replacing 'SimpleStorage'
   -------------------------
   > transaction hash:    0x33af2267dbdc001dea4464f3d3b9c514b5ea196c67634ad4a81a42a44aa884bb
   > Blocks: 0            Seconds: 0
   > contract address:    0x5486A4807760A222852B87ab59a582ccF3A6fb1C
   > block number:        23
   > block timestamp:     1610474578
   > account:             0x534006D2A20799323EdFcf779a478d568191aD41
   > balance:             99.93685246
   > gas used:            156392 (0x262e8)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00312784 ETH

Contract balance is: 0

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00312784 ETH
```

**NOTE** To run code again, use `npx truffle migrate --reset`