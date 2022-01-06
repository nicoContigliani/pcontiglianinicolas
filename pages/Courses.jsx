import Container from '../Components/Container'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import { style } from '@mui/system'


const Courses = () => {
    return (
        <div>
            {/* <style jsx>{`
h5{
    color: rgb(220, 220, 230);
}

        .container {
          // margin: 50px;
        }
        p {
          background:black;
          width: 100%;
   
        }
        `}</style> */}


            <style jsx>{`
            @media (min-width: 320px) and (max-width: 700px) {

                h5{
                    color: rgb(121, 135, 150 );
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
                    <div className={styles.main}>
                        <div className={styles.container2}>

                            < motion.div
                                animate={{ x: 1, y: 20, opacity: 1 }}

                                transition={{
                                    delay: 1,
                                    x: { type: "tween", stiffness: 150 },
                                    default: { duration: 1 },
                                }}
                            >
                                <h2>Cursos</h2>

                                <h3>PLATAFORMA UDEMY</h3>
                                <br />


                                <h5>
                                    JavaScript 2020: Curso desde Principiante hasta ProfesionalUso Json con Axios y Fetch <br />
                                    Linux para Principiantes <br />
                                    React JS ⭐Desde Cero! Hooks, Redux, Context, Firebase y más! <br />
                                    De cero a experto (Hooks MERN) <br />
                                    Patrones de Diseño en Javascript y Node <br />
                                    UX Design: Conceptos básicos para principiantes
                                </h5>

                                <br />
                                <h3>PLATAFORMA PLATZY</h3>

                                <h5>
                                    Postgres <br />
                                    Clases del Curso de Administración de Servidores Linux 2017
                                </h5>
                            </motion.div>
                            <br />
                        </div>
                    </div>
                </Container>
            </p>
        </div>
    )
}

export default Courses

