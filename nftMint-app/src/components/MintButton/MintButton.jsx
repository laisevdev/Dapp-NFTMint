import './MintButton.css'

import { ethers } from 'ethers'
import abi from '../../utils/nftMint.json';


const MintButton = () => {


  const contract_address = "0xD305E2f4978490FA8B231D3630F7097b38B69c17"
  const contract_abi = abi.abi;
  const uri = "https://ipfs.io/ipfs/Qmc2NJLkBumcL1G4VrYKn6b1rFm1EVvA7RHsh1TdqZTfXG/";

  async function mintnft(){
    
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const nftcontract = new ethers.Contract(contract_address, contract_abi, signer)

        try {
          const mintAmount = 1;
          const mintjpg = await nftcontract.mint(mintAmount, uri, {
            value: BigInt("1000000000000000") * BigInt(mintAmount),
          });
          console.log("Cunhando...espere por favor.")
          
          await mintjpg.wait()
          console.log("NFT Cunhado, veja o hash da transação", mintjpg.hash)       
      
    } catch (erro) {
      console.log('Erro encontrado', erro)
    }
  }

  }
  return (
    <div className='btnMint'>
      <button type="button" onClick={mintnft}>Mint NFT</button>
    </div>
    
  )
}

export default MintButton