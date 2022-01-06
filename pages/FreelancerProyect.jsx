import Container from '../Components/Container'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from '../styles/Home.module.css'


const FreelancerProyect = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


        <div>

            <style jsx>{`
            @media (min-width: 320px) and (max-width: 700px) {
                h5{
                    color: rgb(121, 130, 143 );
                                        transform: scale(0.8)
                   
                }
                     h6{
            transform: scale(0.9)
        }
                 p {
                    background:black;
                    }
            }
@media (min-width: 768px) and (max-width: 2000px) {
  p {
          background:black;
   
        }
        h5{
            //   font-size: 1vh;

        }
        h6{
            color: rgb(255, 255, 255 );
            font-size: 2.1vh;
            transform: scale(1)
        }
}
     
   
        `}</style>



            <p>
                <Container>

                    <div className='container'>


                        <div className={styles.main}>
                            <div className={styles.container2}>
                                <h1 className="text-center">Proyectos Freelancer</h1><br />
                                <h2>Sistema Seguros</h2>
                                <div className="container">

                                    <h3>
                                        Descripción

                                    </h3>
                                    <h6>Se puede dar de alta usuario y poliza con un sistema guiado.Posee el envio de mensajes por Wathssapp y correos Gmail</h6>

                                    <h5>Tecnologías Utilizadas

                                    </h5>
                                    <div className="container">
                                        <h6>

                                            Node.js,                                        Express.js, <br />
                                            Postgres,
                                            React.js Hoocks,
                                            Bootstrap,
                                            Material UI,
                                            Bootstrap,
                                            NodeMail                                        Api Wathsapp
                                        </h6>
                                    </div>


                                    <Button variant="secondary" className={styles.box} size="sm" onClick={handleShow}>
                                        video
                                    </Button>


                                    <div className="container">

                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Demostración</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h6>
                                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z13lBykzBCA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                                <a href="https://www.youtube.com/embed/Z13lBykzBCA">Link YouTube</a>

                                            </h6>

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary " onClick={handleClose} >
                                                Close
                                            </Button>
                                            {/* <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </p></div>
    )
}

export default FreelancerProyect
