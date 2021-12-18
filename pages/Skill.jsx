import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'

const Skill = () => {
    return (
        <Container>

            < motion.div
                animate={{ x: 1, y: 5, opacity: 1 }}
                
                transition={{
                    delay: 1,
                    x: { type: "tween", stiffness: 150 },
                    default: { duration: 1 },
                }}
                className={styles.box}
                >

                <h2> Habilidades Profesionales</h2>
                <div className="row">
                    <div className="col-sm-8"
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            borderRadius: "100%"
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'tween',
                            duration: 1
                        }}
                        ><br />
                        <h6>
                            Back End
                        </h6>
                        Node.js
                        <br /><br />
                        <h6>
                            Front End
                        </h6>
                        ES6, MAterial UI, Bootstrap,Metro <br />
                        Figma,Frame Motion y React.js(Hooks), Jest

                        <h6>
                            Movile
                        </h6>
                        React Native
                    </div>
                    <div className="col-sm-6"
                        animate={{
                            x: 30,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            borderRadius: "100%"
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: 'tween',
                            duration: 1
                        }}
                        
                    >


                        <h6>
                            Base de Datos
                        </h6>
                        Mysql,Postgres y SQL server

                        <br /><br />
                        <h6>
                            Control de Versión
                        </h6>
                        GitHub
                        <br /><br />
                        <h6>
                            Redes de Datos y S.O.
                        </h6>
                        Cisco,GNU/LINUX,y Windows Server.

                    </div>
                    <div
                    >
                        <br />
                        <div className="container">

                            Español nativo <br />
                            Ingles - A2 en proceso
                        </div>


                    </div>
                </div>
            </motion.div>

        </Container>
    )
}

export default Skill
