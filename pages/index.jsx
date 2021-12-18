import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"


const index = () => {
  
  return (
    <Container>
      <motion.main className={styles.main} 
      
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}    
        
      >
        <div>
<div className="container">
          <h1 className={styles.box} >Bienvenidos</h1>

</div>
        </div>
      </motion.main>

    </Container>
  )
}

export default index
