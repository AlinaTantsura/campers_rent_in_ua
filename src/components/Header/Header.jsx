import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import camper from "../images/camper.png";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <header >
            <div className={styles.header}>
            <div onClick={handleClick} className={styles.title_box}>
                <img src={camper} alt="Icon camper" width={"25px"}/>
                <h3>Campers rent</h3>
            </div>
            <nav className={styles.navigation}>
                <Link className={(location.pathname === "/") ? `${styles.active} ${styles.link}` : `${styles.link}`} to="/">Home</Link>
                <Link className={(location.pathname === "/catalog" || location.pathname === "/catalog/features" || location.pathname === "/catalog/reviews") ? `${styles.active} ${styles.link}` : `${styles.link}`} to="/catalog">Catalog</Link>
                <Link className={(location.pathname === "/favorites" || location.pathname ==="/favorites/features" || location.pathname ==="/favorites/reviews") ? `${styles.active} ${styles.link}` : `${styles.link}`} to="/favorites">Favorites</Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;