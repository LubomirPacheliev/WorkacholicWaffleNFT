import React, { Dispatch } from "react";
import './btn_styling.scss';

interface pKeyProps {
    pKey: String | null,
    setpKey: Dispatch<any>
}

const ConnectButton = ({pKey, setpKey}: pKeyProps) => {
    const connectWallet = async () => {
        try {
            const { solana }: any = window;
            const response = await solana.connect();
            setpKey(response.publicKey);
        } catch (e) {
            console.error(e);
        }
    }
    return (<>{pKey && <button className="connect-wallet-btn draw" onClick={connectWallet}>connect</button>}</>);
}

export default ConnectButton;