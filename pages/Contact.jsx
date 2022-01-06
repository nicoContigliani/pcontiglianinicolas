import Container from '../Components/Container'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'


const Contact = () => {
    return (

        <div>
            <style jsx>{`
h5{
    color: rgb(230, 230, 230);
}

        .container {
          // margin: 50px;
        }
        p {
          background:black;
          width: 100%;
   
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






                        <div className="container mr-5">
                            <div className={styles.main}>
                                <div className={styles.container2}>

                                    <h2>Contactos</h2>
                                    <h6>
                                        Teléfono: +5492612444106

                                    </h6>

                                    <h6>
                                        Correo:
                                        nico.contigliani@gmail.com

                                    </h6>
                                    <h6>
                                        Respositorio:<br />
                                        <a href="https://github.com/nicoContigliani">https://github.com/nicoContigliani</a>            <h6> <a href="www.linkedin.com/in/nicolas-contigliani"><samp> www.linkedin.com/in/nicolas-contigliani</samp></a> </h6>

                                    </h6>
                                    <h6>
                                        Facebook: <br />
                                        <a href="https://www.facebook.com/nico.contiglliani/">http://www.linkedin.com/in/nicolas-contigliani/</a><br />

                                    </h6>
                                    <h6>
                                        Linkedin: <br />
                                        <a href="http://www.linkedin.com/in/nicolas-contigliani/">https://www.facebook.com/nico.contiglliani/</a><br />

                                    </h6>

                                    <a href="../public/pdf/Nicolas_Contigliani_Desarrollador_fullStack.pdf" download="./Analista_en_sistemas.pdf">
                                        <button className="btn btn-outline-primary">CV Nicolás Contigliani</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.main>
                </Container>
            </p>

        </div>
    )
}

export default Contact
