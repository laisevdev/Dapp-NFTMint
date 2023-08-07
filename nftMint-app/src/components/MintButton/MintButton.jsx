import './MintButton.css'

import { ethers } from 'ethers'
import abi from '../../utils/nftMint.json';


const MintButton = () => {


  const contract_address = "0x5135D853A6D2B5A1cbb9bbf9d73994a03eFbD1cd"
  const contract_abi = abi.abi;
  const uri = "https://ipfs.io/ipfs/bafybeihtixxgkce64vg6fe32v2knumoprw24qje543mvoroirenbjnjrxi/";
  

  async function mintnft(){
    
      
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const nftcontract = new ethers.Contract(contract_address, contract_abi, signer)

        try {
          const mintAmount = 1;
          const mintjpg = await nftcontract.mint(mintAmount, uri, {
            value: BigInt("100000000000000") * BigInt(mintAmount),
          });
          console.log(mintjpg)
          console.log("Cunhando...espere por favor.")
          
          await mintjpg.wait()
          console.log("NFT Cunhado, veja o hash da transação", mintjpg.hash)       
      
    } catch (erro) {
      console.log('Erro encontrado', erro)
  }

  }
  return (
    <div className='btnMint'>
      <button type="button" onClick={mintnft}>Mint NFT</button>
    </div>
    
  )
}

export default MintButton