import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return <nav className={styles.navBar}>
          <a className={styles.icon} href="/"><span className="fa fa-tasks " /></a> 
          <div className={styles.links}>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/">Home</NavLink>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/favorite">Favorite</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/about">About</NavLink>
          </div>  
        </nav>
  
}
export default NavBar