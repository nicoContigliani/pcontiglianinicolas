import Container from '../Components/Container'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


const Education = () => {
    return (
        <Container >
            < motion.div
                animate={{ x: 1, y: 2, opacity: 1 }}

                transition={{
                    delay: 1,
                    x: { type: "tween", stiffness: 150 },
                    default: { duration: 1 },
                }}
            >

                <div
                    className={styles.main}
                >
                    <div className={styles.container2}>




                        <h2>
                            Educación


                        </h2>
                        <br /><br />
                        <h4>
                            TECNICATURA SUPERIOR EN ANÁLISIS Y PROGRAMACIÓN DE SISTEMAS <br />

                        </h4>
                        Inst. de Educación Superior Belgrano | 2016 - 2021 | Graduado



                        <br /><br /><br />
                        <h4>
                            TÉCNICO UNIVERSITARIO DE REDES DE DATOS Y TELECOMUNICACIONES

                        </h4>
                        ITU- Universidad Nacional De Cuyo

                    </div>
                </div>
            </motion.div>
        </Container>
    )
}

export default Education
