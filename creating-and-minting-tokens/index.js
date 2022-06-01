
const {
        Connection,
        PublicKey,
        ClusterApiUrl,
        Keypair,
        LAMPORTS_PER_SOL,
        clusterApiUrl
} = require("@solana/web3.js");

const { createMint } = require("@solana/spl-token");

const payer = Keypair.generate();
const mintAuthority = Keypair.generate();
const freezeAuthority = Keypair.generate();
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
/* Creating a solana Token */

const mint = async () => createMint(
        connection,
        payer,
        mintAuthority.publicKey,
        freezeAuthority.publicKey,
        9 // We are using 9 to match the CLI decimal default exactly
)
console.log(mint.toBase58());




// const main = async()=>{
// }
// main()