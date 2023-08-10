import './Logotipo.css'
import imglogo from '../../imgs/foto-logo.png'


const logo = imglogo;

const Logotipo = () => {

  return <img className='image' src={logo} alt='Logotipo' />;
}

export default Logotipo