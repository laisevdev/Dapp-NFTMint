import {useState, useEffect, useRef} from 'react'
import './Slide.css'
import { motion } from 'framer-motion';

import img1 from '../../imgs/imgslide/1.jpg'
import img2 from '../../imgs/imgslide/2.jpg'
import img3 from '../../imgs/imgslide/3.jpg'
import img4 from '../../imgs/imgslide/4.jpg'
import img5 from '../../imgs/imgslide/5.jpg'
import img6 from '../../imgs/imgslide/6.jpg'
import img7 from '../../imgs/imgslide/7.jpg'
import img8 from '../../imgs/imgslide/8.jpg'


const images = [img1, img2, img3, img4, img5, img6, img7,img8]


const Slide= () => {

   const carousel = useRef();
   const [width, setWidth] = useState(0);

   useEffect(() =>{
      console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
   }, [])

   return (
      <div className='container'>
         <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
            <motion.div className='inner'
            drag='x'
            dragConstraints={{right: 0, left: -width}}
            initial={{ x: 300}}
            animate={{ x:0}}
            transition={{ duration: 0.8}}
            >

               {images.map (image => (
                  <motion.div key={image}>
                     <img src= {image} alt='imagens'/>           
                  </motion.div>
               ))}

            </motion.div>
         </motion.div>
      </div>
   )    
  
  }
  
  export default Slide;