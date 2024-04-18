import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import camper from "../images/camper.png";

const Header = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    return (
        <header className={styles.header}>
            <div onClick={handleClick} className={styles.title_box}>
                <img src={camper} alt="Icon camper" width={"25px"}/>
                <h3>Campers rent</h3>
            </div>
            <nav className={styles.navigation}>
                <NavLink className={styles.link} to="/">Home</NavLink>
                <NavLink className={styles.link} to="/catalog">Catalog</NavLink>
                <NavLink className={styles.link} to="/favorites">Favorites</NavLink>
            </nav>
        </header>
    )
};

export default Header;