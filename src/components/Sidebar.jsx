import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}></footer>
      <p className={StyleSheet.copyright}>
        &copy; Copyright 2023 - {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </section>
  );
}

export default Sidebar;
