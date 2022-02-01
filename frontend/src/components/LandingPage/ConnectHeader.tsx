import React, { useState, useEffect } from "react";
import ConnectButton from "../ConnectButton/ConnectButton";

const ConnectHeader = () => {
    const [pKey, setpKey] = useState(null);

    const checkPhantom = async () => {
        try {
            const { solana }: any = window;
            if (solana) {
                if (solana.isPhantom) {
                    const response = await solana.connect({onlyIfTrusted: true});
                    if (response.publicKey) setpKey(response.publicKey);
                }    
            } else {
                alert("Go get a phantom wallet, my man");
            }
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        checkPhantom();
    }, []);

    return (
        <header className="connect-wallet-header">
        <h1>Hello, gamer 👻</h1>
        {!pKey && <p>your phantom wallet is connected</p>}
        {pKey && <p>why don't you connect your phantom wallet</p>}
        <ConnectButton {...{pKey, setpKey}} />
      </header>
    )
}

export default ConnectHeader;