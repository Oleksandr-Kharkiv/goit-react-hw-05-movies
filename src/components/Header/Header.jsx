import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <nav className={css.HeaderComponent}>
            <div className={css.navbar}>
                <NavLink to='/' className={css.navLink}>Home</NavLink>
                <NavLink to='movies' className={css.navLink}>Movies</NavLink>
            </div>
        </nav>
    )
}
export default Header