import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h3>Campers rent</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </nav>
        </div>
    )
};

export default Header;