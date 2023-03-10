import styles from './NavBar.module.scss';

const NavBar = () => {
  return <nav className={styles.navBar}>
          <a className={styles.icon} href="/"><span className="fa fa-tasks " /></a> 
          <div className={styles.links}>
            <a href="/">Home</a> 
            <a href="/favorite">Favorite</a> 
            <a href="/about">About</a>
          </div>  
        </nav>
  
}
export default NavBar