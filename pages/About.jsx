import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'

const About = () => {
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
                    <br />
                    < motion.div
                        animate={{ x: 2, y: 2, opacity: 1 }}
                        transition={{
                            delay: 1,
                            x: { type: "spring", stiffness: 100 },
                            default: { duration: 1 },
                        }}
                    >
                        <div className={styles.main} >
                            <div className={styles.container2}>

                                <h2  >Sobre mi </h2>
                                <h5>    Soy un profesional de TI con la capacidad de trabajar en equipo .Estoy
                                    abierto a diversos tipos de experiencia, buscando el crecimiento del grupo,
                                    así como el desarrollo personal. Estoy ansioso por implementar nuevos
                                    avances tecnológicos. También estoy dedicado a mis obligaciones con la
                                    disciplina y responsabilidad. Abordo los problemas con una estrategia
                                    centrada en la solución.</h5>
                            </div>

                        </div>
                        <p>
                            <br />

                        </p>



                    </motion.div>
                </Container>
            </p>

        </div>

    )
}

export default About
