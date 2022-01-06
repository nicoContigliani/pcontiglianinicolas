import { motion } from 'framer-motion'
import React from 'react'
import Container from '../Components/Container'
import styles from '../styles/Home.module.css'

const Skill = () => {
    return (



        <div>
            <style jsx>{`
        .container {
          // margin: 50px;
        }
        p {
          background:black;
          backgroun-image:url();
   
        }
        `}</style>

            <p>

                <Container>
                    <div className='container'>
                        <div className={styles.main}>
                            < motion.div
                                animate={{ x: 1, y: 5, opacity: 1 }}

                                transition={{
                                    delay: 1,
                                    x: { type: "tween", stiffness: 150 },
                                    default: { duration: 1 },
                                }}

                                className={styles.container2}
                            >

                                <h2> Habilidades Profesionales</h2>
                                <div className="row">
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
                                        <h4>
                                            Back End
                                        </h4>
                                        <span>
                                            Node.js

                                        </span>

                                        <h4>
                                            Front End
                                        </h4>
                                        <span>
                                            ES6, MAterial UI, Bootstrap,Metro <br />
                                            Figma,Frame Motion y React.js(Hooks), Jest

                                        </span>

                                        <h4>
                                            Movile
                                        </h4>
                                        <span>
                                            React Native

                                        </span>
                                    </div>
                                    <div className="col-sm-6"
                                    // animate={{
                                    //     x: 30,
                                    //     y: 0,
                                    //     scale: 1,
                                    //     rotate: 0,
                                    //     borderRadius: "100%"
                                    // }}
                                    // whileHover={{ scale: 1.5 }}
                                    // whileTap={{ scale: 0.9 }}
                                    // transition={{
                                    //     type: 'tween',
                                    //     duration: 1
                                    // }}

                                    >


                                        <h4>
                                            Base de Datos
                                        </h4>
                                        <span>
                                            Mysql,Postgres y SQL server
                                        </span>

                                        <h4>
                                            Control de Versión
                                        </h4>
                                        <span>
                                            GitHub
                                        </span>

                                        <h4>
                                            Redes de Datos y S.O.
                                        </h4>
                                        <span>

                                            Cisco,GNU/LINUX,y Windows Server.
                                        </span>

                                        <h4>Idioma</h4>

                                        <span>
                                            Español nativo <br />
                                            Ingles - A2 en proceso
                                        </span>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>

                </Container>
            </p>

        </div>
    )
}

export default Skill
