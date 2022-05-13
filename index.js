const {
    Connection,
    PublicKey,
    ClusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    clusterApiUrl
} = require("@solana/web3.js")

/* Created a Solana wallet of type KeyPair */
const wallet = new Keypair()

/* Getting the wallet crederntails */

/* This is retrieving the public and private they
Public Key allows you to recieve solana
Private Key allows you to send solana
Wallet contains the private an the public Keys 
*/

/* Getting the public Key 
Wrap the public key witht the public key clause that we added in our imports
*/
const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey
/* Print out the balance of the wallet 
Web3.js allows us to get the balance of the wallet using a getbalance method inside of the connection clause  that we imported 
*/

const getWalletBalance = async () => {

    try {
        /* We are going to make a connection object that will be used to get the balance  
        
        Apart from the solana main network solana has 2 other networks

        1.Devnet:This is a replica of the main net and is used by developers to tryout features of solana without spending real money 
        2.Testnet:
        The clusterApiUrl provides us access to the devnet 
         */
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

        /* We are going to use the connection and the public key to get the wallet Ballance of our wallet */
        const walletBalance = await connection.getBalance(publicKey)

        console.log('Wallet balannce is ' + walletBalance);

    } catch (err) {
        console.error(err)

    }
}

/* This action will add some solana into out solana wallet  */

const airDropSol = async () => {

    try {

        /* Create a new connection to the solana Dev network */
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')


        /*
        Now we will do the airdrop
        This will get the result of the method that we are going to call.
        The first argument we are going to pass it the public key the second argument is the amount of solana that we are going to transfer to our wallet
         However the second argument is not in SOL its in LAMPORTS, the conversion of LAMPORTS to SOL is 1000000000LAMPORTS == 1 SOL

          */
        const fromAirDropSignature = await connection.requestAirdrop(publicKey,2*LAMPORTS_PER_SOL)

        /* We can confrim the transaction by */

        await connection.confirmTransaction(fromAirDropSignature)


    } catch (err) {
        console.error(err)

    }
}


const main = async () => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}
main()