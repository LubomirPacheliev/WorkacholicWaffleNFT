import React, { useState, useEffect } from "react";
import ConnectButton from "../ConnectButton/ConnectButton";

const ConnectHeader = () => {
    const [pKey, setpKey] = useState(null);

    const checkPhantom = async () => {
        try {
            // @ts-ignore
            // BUG: solana is initially undefined in window so the user has to click connect each time
            const { solana } = window;
            if ("solana" in window) {
                if (solana.isPhantom) {
                    const response = await solana.connect({onlyIfTrusted: true});
                    setpKey(response.publicKey);
                }  else {
                    window.open("https://phantom.app/", "_blank");
                }
            }
        } catch(e) {
            setpKey(null);
            console.error(e);
        }
    }

    useEffect(() => {
        checkPhantom();
    }, []);

    return (
        <header className="connect-wallet-header">
        <h1>Hello, gamer 👻</h1>
        {pKey && <p>your phantom wallet is connected</p>}
        {!pKey && <p>why don't you connect your phantom wallet</p>}
        <ConnectButton {...{pKey, setpKey}} />
      </header>
    )
}

export default ConnectHeader;