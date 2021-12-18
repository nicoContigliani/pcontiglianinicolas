import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <Container>
            < motion.div
                animate={{ x: 1, y: 20, opacity: 1 }}
                transition={{
                    delay: 1,
                    x: { type: "spring", stiffness: 100 },
                    default: { duration: 1 },
                }}
            >
                <div className="container" >
                <div className={styles.container}>

                        <h2 >Sobre mi </h2>
                        <h5>    Soy un profesional de TI con la capacidad de trabajar en equipo .Estoy
                            abierto a diversos tipos de experiencia, buscando el crecimiento del grupo,
                            así como el desarrollo personal. Estoy ansioso por implementar nuevos
                            avances tecnológicos. También estoy dedicado a mis obligaciones con la
                            disciplina y responsabilidad. Abordo los problemas con una estrategia
                            centrada en la solución.</h5>
                </div>

                </div>




            </motion.div>
        </Container>
    )
}

export default About
