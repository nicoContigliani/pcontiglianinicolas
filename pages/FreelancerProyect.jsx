import Container from '../Components/Container'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


const FreelancerProyect = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>

            
            <div>
                <h1 className="text-center">Proyectos Freelancer</h1><br />
                <h2>Sistema Seguros</h2>
                {/* <iframe width="800" height="300" src="https://www.youtube.com/embed/Z13lBykzBCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <div className="container">

                    <h5>
                        Descripción

                    </h5>
                    <span>Se puede dar de alta usuario y poliza con un sistema guiado.Posee el envio de mensajes por Wathssapp y correos Gmail</span>

                    <div data-role="gradient-box">

                    </div>
                    <h5>Tecnologías Utilizadas

                    </h5>
                    <ul data-role="drag-items">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Postgres</li>
                        <li>React.js Hoocks</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                        <li>NodeMail</li>
                        <li>Api Wathsapp</li>
                    </ul>




                    <div className="d-grid gap-2 justify-content-md-end">

                        <Button variant="secondary" size="lg" onClick={handleShow}>
                            video
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Demostración</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z13lBykzBCA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                            <h6>https://www.youtube.com/embed/Z13lBykzBCA</h6>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} >
                                Close
                            </Button>
                            {/* <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </Container>
    )
}

export default FreelancerProyect
