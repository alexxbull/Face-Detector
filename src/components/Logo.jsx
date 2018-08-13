import React from "react";
import styles from "../styles/Logo.module.css";
import Tilt from "react-tilt";
import logoIcon from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Tilt
        className={styles.Tilt}
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={logoIcon} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
