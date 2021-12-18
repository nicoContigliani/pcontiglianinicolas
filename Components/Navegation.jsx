import React from 'react'
import Link from 'next/link'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from '../styles/Home.module.css'


const Navegation = () => {



    return (
        <div className={styles.body}>


            <Navbar collapseOnSelect expand="lg"bg="light" variant="light">
                <Container>
                    <div className="container">
                    <Navbar.Brand href="http://www.linkedin.com/in/nicolas-contigliani"><h5>Nicolás Contigliani</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link href="/" >Inicio</Link></Nav.Link>
                            <Nav.Link><Link href="/About">Sobre mi</Link></Nav.Link>
                            <Nav.Link><Link href="/Skill">Habilidades</Link></Nav.Link>
                            <Nav.Link><Link href="/Education">Educación</Link></Nav.Link>
                            <Nav.Link><Link href="/Company">Experiencia en Empresa</Link></Nav.Link>
                            <Nav.Link><Link href="/FreelancerProyect">Proyecto Freelancer</Link></Nav.Link>
                            <Nav.Link><Link href="/StudyProjects">Proyectos de Estudio</Link></Nav.Link>
                            <Nav.Link><Link href="/Courses">Cursos</Link>  </Nav.Link>
                            <Nav.Link><Link href="/Contact">Contactos</Link>  </Nav.Link>


                        </Nav>
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>

                    </div>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navegation
