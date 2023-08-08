import ConnectButton from '../ConnectButton/ConnectButton'
import './Navbar.css'
import Logotipo from '../Logotipo/Logotipo';



const Navbar = () => {
    return (
      <>      
        <nav className='navbar'> 

          <div className='logotipo'>
            <Logotipo />
          </div>
        

          <h1 className='gradient'>New Collection @NFTNoob</h1>

          <div className='connect-btn'>
            <ConnectButton />
          </div>

        </nav>
      </>  
    )
  }
  
  export default Navbar