import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Image from 'next/image'
import algo from "../public/Imagenes/Vector.png"
import { style } from '@mui/system'

const index = () => {

  return (
    <div>
      <style jsx>{`
        .container {
          // margin: 50px;
        }
        p {
          background:black;
          backgroun-image:url("../public/Imagenes/james-harrison-vpOeXr5wmR4-unsplash.jpg");
   
        }
        `}</style>
      <p>
        <Container className={styles.body}>

          <motion.main className={styles.main}

            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

          >
            <div>
              <h1 className={styles.box} >Bienvenidos</h1>



              {/* <Image
            className={style.algo}
              src={algo}
             
            /> */}
            </div>

          </motion.main>


        </Container>
      </p>
      <p>
        <hr />

      </p>
    </div>
  )
}

export default index
