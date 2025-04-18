import React, { useEffect, useState,} from "react";
import axios from "axios";
import styles from "./Home.module.css";


const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    })
  }, []);
  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existingItem = basket.find((x) => x.id === item.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      basket.push({ ...item, count: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  };
  const addToFavori = (item) => {
    let favori = JSON.parse(localStorage.getItem("favori")) || [];
    let current = favori.find((x) => x.id == item.id);
    if (current) {
      alert("elave etmisiz");
    } else {
      favori = [...favori, { ...item }];
    }
    localStorage.setItem("favori", JSON.stringify(favori));
  };
  return (
    <div>
      
      <div className={styles.cards}>
        {data &&
          data.map((item) => (
            <div className={styles.card} key={item.id}>
              <div>
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
                  <h5>{item.title}</h5>
                  <p></p>
                  <p>${item.price}</p>
                  <div className={styles.btns}>
                    <button onClick={() => addToBasket(item)}>
                      Add to Cart
                    </button>
                    <button onClick={() => addToFavori(item)}>Favori</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      ;
    </div>
  );
};

export default Home;
