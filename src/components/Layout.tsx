import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          <span className={`${styles.logo} tamil`}>த</span>
          <span>
            Learn Tamil
            <small>Script from basics to mastery</small>
          </span>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
          <NavLink to="/learn/vowels" className={({ isActive }) => (isActive ? styles.active : "")}>
            Vowels
          </NavLink>
          <NavLink
            to="/learn/consonants"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Consonants
          </NavLink>
          <NavLink to="/learn/uyirmei" className={({ isActive }) => (isActive ? styles.active : "")}>
            216 Chart
          </NavLink>
          <NavLink to="/chart" className={({ isActive }) => (isActive ? styles.active : "")}>
            Full table
          </NavLink>
          <NavLink to="/words" className={({ isActive }) => (isActive ? styles.active : "")}>
            Words
          </NavLink>
          <NavLink to="/phrases" className={({ isActive }) => (isActive ? styles.active : "")}>
            Phrases
          </NavLink>
          <NavLink to="/dialogues" className={({ isActive }) => (isActive ? styles.active : "")}>
            Dialogues
          </NavLink>
          <NavLink to="/grammar" className={({ isActive }) => (isActive ? styles.active : "")}>
            Grammar
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        Tamil has 12 உயிரெழுத்து, 18 மெய்யெழுத்து, and 216 உயிர்மெய் combinations.
      </footer>
    </div>
  );
}
