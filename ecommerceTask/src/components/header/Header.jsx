import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Header.module.css'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.btns} >
      <button onClick={() => navigate("/")}>Home</button>
      <button
        onClick={() => {
          navigate("/basket");
        }}
      >
        Basket
      </button>
      <button
        onClick={() => {
          navigate("/favori");
        }}
      >
        Favori
      </button>
    </div>
  );
};

export default Header;
