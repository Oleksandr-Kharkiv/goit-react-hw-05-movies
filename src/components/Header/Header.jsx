import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () =>{
    return (
        <nav className={css.HeaderComponent}>
            <div className={css.navbar}>
                <NavLink className={css.navLink} to='/'>Home</NavLink>
                <NavLink className={css.navLink} to='movies'>Movies</NavLink>
            </div>
        </nav>
    )
}
export default Header