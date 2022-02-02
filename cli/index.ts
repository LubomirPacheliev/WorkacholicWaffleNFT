import web3 = require('@solana/web3.js');

const connection = new web3.Connection(web3.clusterApiUrl('devnet'));

const key: Uint8Array = Uint8Array.from([
    253,240,131,100,75,21,54,196,79,64,85,189,163,229,182,106,250,222,
    25,236,63,59,54,170,151,72,232,183,98,204,5,92,120,248,19,9,249,164,
    49,246,83,197,20,254,27,161,42,3,124,25, 240,215,102,54,1,72,18,23,
    124,175,74,239,104,10
]);

const main = async () => {
    const signer: web3.Keypair = web3.Keypair.fromSecretKey(key);
    const balance = await connection.getBalance(signer.publicKey);
    console.log(`SOL: ${balance / web3.LAMPORTS_PER_SOL}`);
}

main()
.then(() => process.exit(0))
.catch(e => {
    console.error(e)
    process.exit(1)
})