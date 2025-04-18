import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
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
