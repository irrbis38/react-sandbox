import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className="nav-wrapper">
          <a href="!#" className={`brand-logo ${styles.logo}`}>
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
