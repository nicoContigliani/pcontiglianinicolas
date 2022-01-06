

import Navigation from "./Navegation";
import Head from "next/head";
import styles from '../styles/Home.module.css'



import { motion, AnimatePresence } from "framer-motion";


const Container = (props) => (
  <div>
    <style jsx>{`
        .container {
          // margin: 50px;
        }
        footer {
        background-color: black;
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
   
        }
        `}</style>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/spacelab/bootstrap.min.css"
      />
      <title>Nicolas Contigliani Portafolio</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" referrerpolicy="no-referrer" />

      {/* <style src="../styles/Home.module.css"></style> */}



    </Head>
    <Navigation />


    {/* <div className={styles.dream}>
    </div>
    <div className={styles.dream2}>
    </div> */}
    <div className="container " >{props.children}</div>
    <footer className="co">



    </footer>
  </div>


);

export default Container;
