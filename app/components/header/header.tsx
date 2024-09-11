import styles from "./header.module.scss";

export default function Home() {
  return (
    <nav className={"navbar navbar-light bg-light w-100"}>
      <a className="navbar-brand ms-4" href="#">
        Navbar
      </a>
      <span className={`${styles.loginButton} ${"navbar-text me-4"}`}>Login -{">"}</span>
    </nav>
  );
}
