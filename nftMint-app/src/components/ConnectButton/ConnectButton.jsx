import './ConnectButton.css'
import { ethers } from 'ethers'
import { useState } from 'react';


const ConnectButton = () => {

  const [message, setMessage] = useState("");

  async function connecWallet(){
    setMessage("")    
    if(!window.ethereum) return setMessage("Carteira não encontrada");

    const provider = new ethers.providers.web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    if(!accounts || !accounts.length) return setMessage("Carteira não autorizada")

  }

  return (
    <div> 
        <button type='button' onClick={connecWallet}>Conectar Carteira</button> 
        <br/>
        <p>{message}</p>
    </div>
  
  )
}

export default ConnectButton