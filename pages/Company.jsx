import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'


const Company = () => {
    return (
        <Container>

            <motion.main

                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}

            >
                <div className={styles.container}>



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
            </motion.main>

        </Container>
    )
}

export default Company
