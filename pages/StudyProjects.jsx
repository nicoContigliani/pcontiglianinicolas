import React, { useState } from 'react'
import Container from '../Components/Container'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const StudyProjects = () => {
    const [pagina, setPagina] = useState("true")

    const [value, setValue] = React.useState(0);
    const [datos, setDatos] = useState(
        {
            title1: "",
            url: "",
            respositori: "",
            description: "",
            tecnologi: ""
        }
    )

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const data = [
        {
            id: 0,
            title1: "Sistema Clima",
            url: "https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fweather-the-world.netlify.app&s=4&e=h",
            respositori: "https://github.com/nicoContigliani/clima_React",
            description: "Se ingresa las siglas de la ciudad y la api responde con la temperatura",
            tecnologi: "React.js,ApiClima"
        },
        {
            id: 1,
            title1: "Crimenes UK",
            url: "https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fcrimenuk.netlify.app&s=4&e=h",
            respositori: "https://github.com/nicoContigliani/reactleafle",
            description: "Se ingresa en el mapa y se puede ver puntos gps de donde se produjo crimenes",
            tecnologi: "React.js,ApiCrimenes"
        },
        {
            id: 2,
            title1: "Menú Virtual",
            url: "https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fmenu-restaurant.netlify.app&s=4&e=h",
            respositori: "https://github.com/nicoContigliani/reactleafle",
            description: "Se ingresa las siglas de la ciudad y la api responde con la temperatura",
            tecnologi: "React.js,ApiClima"
        },
        {
            id: 3,
            title1: "Scraping Node",
            url: "https://www.codigos-qr.com/qr/php/qr_img.php?d=https%3A%2F%2Fgithub.com%2FnicoContigliani%2FscrapingNode&s=4&e=m",
            respositori: "https://github.com/nicoContigliani/scrapingNode",
            description: "Se captura datos de una pagina web",
            tecnologi: "Node,Express,Ejs"
        },
    ]





    return (

        <Container>



            <div className="d-flex flex-wrap align-content-center">
                <div className="container">
                    <div className="container">

                        <h1 className="text-center">Proyectos de estudio</h1><br /><br />










                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        centered
                                        aria-label="basic tabs example" >

                                        <Tab label="Sistema Clima" {...a11yProps(1)} />
                                        <Tab label="Crimenes Uk" {...a11yProps(2)} />
                                        <Tab label="Menú Virtual" {...a11yProps(3)} />
                                        <Tab label="Scraping" {...a11yProps(4)} />


                                    </Tabs>
                                </Box>
                                <motion.main

                                    animate={{ x: 1, y: 20, opacity: 1 }}
                                    transition={{
                                        delay: 1,
                                        x: { type: "spring", stiffness: 100 },
                                        default: { duration: 1 },
                                    }}

                                >

                                    {
                                        <ul>
                                            {data.map((item) =>
                                                // <li key={item.id}>
                                                //   {item.title1} - {item.tecnologi} - <img src={item.url} alt=""  />
                                                // </li>


                                                <TabPanel value={value} key={item.id} index={item.id}>
                                                    <div>
                                                        <div >
                                                            <h5>{item.title1}</h5>
                                                            <link href="https://github.com/nicoContigliani/clima_React" />
                                                            <div className="box">
                                                                <img src={item.url} alt="..." />

                                                            </div>


                                                        </div>
                                                        <div>
                                                            <br />
                                                            <Accordion>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                >
                                                                    <Typography>Descripción</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>
                                                                        <span>{item.description}</span>
                                                                    </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                            <Accordion>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel2a-content"
                                                                    id="panel2a-header"
                                                                >
                                                                    <Typography>Tecnologías Utilizadas</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>
                                                                        {item.tecnologi}                                                         </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>

                                                        </div>
                                                    </div>
                                                </TabPanel>


                                            )}
                                        </ul>
                                    }

                                </motion.main>
                                {/* <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel> */}
                            </Box>

                            {/* {
                                    data.map(item => { item })
                                } */}
                        </div>









                    </div>


                    <br />




                </div>

                <hr />


            </div>

        </Container>
    )
}

export default StudyProjects
