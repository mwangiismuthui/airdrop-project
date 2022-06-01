# airdrop-project
# In this Project we are going to learn how to interact with the Solana Devnet 
/* In order to create solana tokens we have to have a wallet. The following command will generate a new solana wallet */

        /* solana-keygen new  */

/* This will return for you a public key whis is the address to your solana wallet  */
/* To check your public key you run the following command  */

        /* solana-keygen pubkey */

/* To check the balance on the devnet you run the following command */

        /* solana balance --url devnet */

/* You can also verify this on the solana explorer devnet network explorer.solana.com */

/* Next we airdrop ourselves some solana on the devnet */

        /* solana airdrop 2 (publickey of your solana wallet) --url devnet */
        

/* CREATING A TOKEN WITH THE SPL LIBRARY */

/* create token command */
        /* spl-token create-token --url devnet */

/* When tokens are created they are given unique addresses that will retrieve some specific information about that token  */

/* MINTING TOKENS */

/* In solana there can be different types of tokens that you can own .In a solana wallet to collect a particular type of token we need to have  an account in our wallet that is specific for that token and that can old that secific token. for our wallet we need to create an account that can hold the token that we created  */


/* To do that we run  */
        /* spl-token create-account (token address) --url devnet */

/* Now we want to increase the toen balance. The process ofincreasing the token balance is called minting  */

/* First we can check out token balance */

        /* spl-token balance (token adrress) --url devnet */

/* To mint 1000 tokens we run  */

        /* spl-token mint (token balance) 1000 --url devnet  */
