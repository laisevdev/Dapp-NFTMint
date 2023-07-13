import './Media.css'

import iconeGithub from '../../imgs/imgSocialMedia/iconeGithub.png'
import iconeMedium from '../../imgs/imgSocialMedia/iconeMedium.png'
import iconeInstagram from '../../imgs/imgSocialMedia/iconeInstagram.png'
import iconeTwitter from '../../imgs/imgSocialMedia/iconeTwitter.png'

const github = [iconeGithub]
const medium = [iconeMedium]
const instagram = [iconeInstagram]
const twitter = [iconeTwitter]

const Media = () => {
  return (
    <div className='media'>
        <ul className='img'>
            <li>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
            </li>
            <li>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
            </li>
            <li>
              <a href="#"><img src={github} alt="GitHub" /></a>
            </li>
            <li>
              <a href="#"><img src={medium} alt="Medium" /></a>
            </li>
        </ul>
    </div>
  )
}

export default Media