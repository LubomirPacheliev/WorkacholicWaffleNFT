import React, { useEffect, useState } from "react";

function App() {
  const [pKey, setpKey] = useState(null);

  const checkPhantom = async () => {
    try {
      const solana = window.solana;
      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect({onlyIfTrusted: true});
          if (response.publicKey) setpKey(response.publicKey);
        } else {
          alert("Go get a phantom wallet, my man");
        }
      }
    } catch(e) {
      console.error(e);
    }
  }

  const connectWallet = async () => {
    try {
      const solana = window.solana;
      const response = await solana.connect();
      setpKey(response.publicKey);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(checkPhantom, []);

  return (
    <div className="App">
      <header className="connect-wallet-header">
        <h1>Hello, gamer 👻</h1>
        {!pKey && <p>your phantom wallet is connected</p>}
        {pKey && <p>why don't you connect your phantom wallet</p>}
        {pKey && <button className="connect-wallet-btn draw" onClick={connectWallet}>connect</button>}
      </header>
    </div>
  );
}

export default App;
