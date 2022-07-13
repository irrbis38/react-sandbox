import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`page-footer ${styles.footer}`}>
      <div className="footer-copyright">
        <div className={`container ${styles.container}`}>
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="!#">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
