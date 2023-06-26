import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <nav className={css.HeaderComponent}>
            <div className={css.navbar}>
                <NavLink to='/' className={({isActive})=> (isActive ? css.active : css.navLink)}>Home</NavLink>
                <NavLink to='movies' className={({isActive})=> (isActive ? css.active : css.navLink)}>Movies</NavLink>
            </div>
        </nav>
    )
}
export default Header