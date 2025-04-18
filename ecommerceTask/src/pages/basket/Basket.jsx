import React, { useState } from "react";
import styles from "./Basket.module.css";
import { MdDelete } from "react-icons/md";
const Basket = () => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const updateBasket = (updatedBasket) => {
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };
  const increaseCount = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    updateBasket(updatedBasket);
  };
  const decreaseCount = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, count: Math.max(1, item.count - 1) } : item
    );
    updateBasket(updatedBasket);
  };
  const removeItem = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id);
    updateBasket(updatedBasket);
  };
  return (
    <div>
      {" "}
      <div className={styles.cards}>
        {basket.map((item) => (
          <div key={item.id} className={styles.card}>
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
            <div className={styles.description}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
            <div style={{display:'flex' }}>  <button onClick={() => decreaseCount(item.id)}>-</button>
              <p>{item.count}</p>
              <button onClick={() => increaseCount(item.id)}>+</button></div>
              <p>Total: ${(item.price * item.count).toFixed(2)}</p>
            </div>
            <button className={styles.sil} onClick={()=>{removeItem(item.id)}}>< MdDelete className={styles.silbtn} /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;
