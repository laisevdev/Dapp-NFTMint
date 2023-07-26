import './ConnectButton.css'
import { useState } from 'react';


const ConnectButton = () => {

  const [message, setMessage] = useState("");

  async function connectWallet(){
    setMessage("")    
    if(!window.ethereum) return setMessage("Carteira não encontrada");
    console.log("Carteira encontrada")

    
    const accounts = await window.ethereum.request({ method: "eth_accounts" })
    if(!accounts.length !== 0) {
      const account = accounts[0]
      console.log("Encontramos uma carteira autorizada", account)
      return setMessage("Conectada")
    } 

  }

  return (
    <div> 
        <button type='button' onClick={connectWallet}>Conectar Carteira</button> 
        <br/>
        <p>{message}</p>
    </div>
  
  )
}

export default ConnectButton