import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'


const Company = () => {
    return (

        <div>
            <style jsx>{`
            @media (min-width: 320px) and (max-width: 700px) {

                h5{
                    color: rgb(121, 130, 143 );
                }
                 p {
                    background:black;
                    }
            }
@media (min-width: 768px) and (max-width: 2000px) {
  p {
          background:black;
   
        }
}
     
   
        `}</style>
            <p>

                <Container>

                    <motion.main

                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <div className={styles.main}>
                            <div className={styles.container2}>



                                <h2> Experiencia en Empresa</h2>
                                <br />
                                <h5>GRUPO DEL PLATA SALUD - ENERO 2021</h5>
                                <h6>Desarrollor Backend y movil</h6>
                                <br />
                                <h5>Tecnologías Utilizadas

                                </h5>
                                <ul data-role="drag-items">
                                    <li>Cake.php                                                                                                                                                                                                                                                                                                                                                                                                                                               </li>
                                    <li>React Native</li>
                                    <li>Postgres</li>
                                    <li>Git</li>


                                </ul>
                            </div>
                        </div>
                    </motion.main>

                </Container>
            </p>
        </div>


    )
}

export default Company
