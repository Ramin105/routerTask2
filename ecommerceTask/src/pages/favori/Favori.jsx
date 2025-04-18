import React, { useState } from "react";
import styles from './Favori.module.css'
import { MdDelete } from "react-icons/md";
const Favori = () => {
  const [favori, setFavori] = useState(
    JSON.parse(localStorage.getItem("favori")) || []
  );
  const updateFavori = (updatedFavori) => {
    setFavori(updatedFavori);
    localStorage.setItem("favori", JSON.stringify(updatedFavori));
  };

  const removeItem = (id) => {
    const updatedFavori = favori.filter((item) => item.id !== id);
    updateFavori(updatedFavori);
  };

  return (
    <div>
      <div className={styles.cards}>
        {favori.map((item) => (
          <div
            key={item.id}
            className={styles.card}
          >
            <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={item.image} alt={item.title} />
                </div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
              className={styles.sil}
            >
              <MdDelete className={styles.silbtn} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favori;
