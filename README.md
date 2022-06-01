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


<!-- Wokings on the terminal -->

ninja@ninja:~$ solana-keygen new --force
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to /home/ninja/.config/solana/id.json
================================================================================
pubkey: 4YMrmxsu6Sdog9YDYEaaLHhSNpboH8weEw8ViU7sKCGS
================================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
circle gentle boost next inside tourist search soft kangaroo supreme gasp minute
================================================================================
ninja@ninja:~$ solana-keygen pubkey
4YMrmxsu6Sdog9YDYEaaLHhSNpboH8weEw8ViU7sKCGS
ninja@ninja:~$ ^C
ninja@ninja:~$ solana balance --url devnet
Error: RPC request error: cluster version query failed: error sending request for url (https://api.devnet.solana.com/): error trying to connect: dns error: failed to lookup address information: Name or service not known
ninja@ninja:~$ solana balance --url devnet
0 SOL
ninja@ninja:~$ solana airdrop 2 4YMrmxsu6Sdog9YDYEaaLHhSNpboH8weEw8ViU7sKCGS --url devenet
error: Invalid value for '--url <URL_OR_MONIKER>': relative URL without a base
ninja@ninja:~$ solana airdrop 2 4YMrmxsu6Sdog9YDYEaaLHhSNpboH8weEw8ViU7sKCGS --url devnet
Requesting airdrop of 2 SOL

Signature: 4VM72Lu5WgmyqLxYdEArtEmcabEjk9hCp5PQbPSdDAk6qurJi6uheLVRv7RU6epzce4HGvFxdQPgMtEaET7SdaBv

2 SOL
ninja@ninja:~$ solana balance --url devnet
2 SOL
ninja@ninja:~$ spl-token create-token --url devnet
Creating token 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ

Signature: R7WnDCbz4EyyTA6LJpMwgBjFZD36TPhYku2xRnJ4rCJAjmNUviaUDyrnaurrc1xrZF8LTZ7S1oDzWoSKTvwT2Se

ninja@ninja:~$ ^C
ninja@ninja:~$ spl-token balance 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ --url devnet
Could not find token account 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f
ninja@ninja:~$ spl-token balance R7WnDCbz4EyyTA6LJpMwgBjFZD36TPhYku2xRnJ4rCJAjmNUviaUDyrnaurrc1xrZF8LTZ7S1oDzWoSKTvwT2Se --url devnet
error: Invalid value for '<TOKEN_ADDRESS>': No such file or directory (os error 2)
ninja@ninja:~$ spl-token create-account 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ --url devnet 
Creating account 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f

Signature: Dg9ymfP7tK52AbzdWqsbJdRvbGKKfxh68vPzv3jcyMrBpKRowXY2MypC1egZbG2vuv7wBKH13RebtCfwdiX6CKX

ninja@ninja:~$ spl-token balance 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ --url devnet
0

ninja@ninja:~$ spl-token mint 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ 1000 --url devnet
Minting 1000 tokens
  Token: 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ
  Recipient: 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f

Signature: 6ThqBAXTdXa3LXvpd7AA1dYydCHzPNBB3zrNaL4SawGqAGsj7PKv4J26hjVdV8KjdH81HzjfLczQivhmzULZRFj

ninja@ninja:~$ spl-token balance 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ --url devnet
1000

ninja@ninja:~$ spl-token mint 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ 3000 --url devnet 
Minting 3000 tokens
  Token: 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ
  Recipient: 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f

Signature: P4Pid9y2JSiSh93zKb5B1bH5y3C6X8ghZqiN4bpM7oaGs5Sv7xP6cCBb2jL8HWvrSpAnuEzUWFDanP2wCj7PEFw

ninja@ninja:~$ splt-token balance --url devnet 
splt-token: command not found
ninja@ninja:~$ spl-token balance 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ  --url devnet 
4000

ninja@ninja:~$ spl-token burn 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ 2000 --url devnet 
Burn 2000 tokens
  Source: 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ
Account could not be parsed as token account: pubkey=3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ
ninja@ninja:~$ spl-token burn 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ^C000 --url devnet 
ninja@ninja:~$ spl-token burn 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f 2000 --url devnet
Burn 2000 tokens
  Source: 7W3pu4RSodztqWWgW4s6X1byJuCxf3hJaV5pM1y1Ji3f

Signature: 2wU775EinHvwo7nG4NMmk1ymb9UHecqzLsvWFdyQ4h4YiseuVBfCdHnwQr7WoK1duPqatHURTw1d4ab4hmCRb8ZU

ninja@ninja:~$ spl-token balance 3PeQUDKgm8jRp25neVp6LRAEPNcYTF47ZgdfQMTqZLkJ --url devnet 
2000

ninja@ninja:~$ 

