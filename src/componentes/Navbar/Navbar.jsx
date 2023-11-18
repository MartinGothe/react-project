import CardWidget from "../CardWidget/CardWidget"
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/public/img/fotologo.jpg" />
                    <p className={styles.titulo}>RetroFutbol</p>
                </div>

                <div>
                    <button className= {styles.BotonNav} >Inicio </button>
                    <button className= {styles.BotonNav} >Camisetas  </button>
                    <button className= {styles.BotonNav} >Buzos </button>
                    <button className= {styles.BotonNav} >Botines </button>
                    <button className= {styles.BotonNav} >Contacto </button>
                </div>
                <CardWidget />
            </nav>



        </>

    )
}

export default Navbar