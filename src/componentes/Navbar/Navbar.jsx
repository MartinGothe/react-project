import { Link } from "react-router-dom";
import { CartWidget } from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
export const NavBar = () => {
return (
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/assets/img/fotologoDiego.png" />
                    <p className={styles.titulo}>RetroFutbol</p>
                </div>

                <div>
                    <Link to="/">

                        <button className={styles.BotonNav}>Inicio </button>
                    </Link>
                    <Link to="/category/camisetas">
                        <button className={styles.BotonNav}>Camisetas  </button>
                    </Link>

                    <Link to="/category/botines">
                        <button className={styles.BotonNav}>Botines </button>
                    </Link>

                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        );
    };
