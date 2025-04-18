import React, {useState} from 'react';


const Favori = () => {
      const [favori, setFavori] = useState(
        JSON.parse(localStorage.getItem("favori")) || []
      );
    const updateFavori = (updatedFavori) => {
        setFavori(updatedFavori);
        localStorage.setItem("favori", JSON.stringify(updatedFavori));
      };

    const removeItem = (id) => {
        const updatedFavori = favori.filter(item => item.id !== id);
        updateFavori(updatedFavori);
      };

    return (
   <div> 
   <div style={{display:'flex', flexWrap:'wrap'}}>
       
       {favori.map(item => (
<div  key={item.id} style={{ width:'250px', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
<img src={item.image} alt={item.title} style={{ width: '100px' }} />
<h3>{item.title}</h3>
<p>Price: ${item.price}</p>
<button onClick={()=>{removeItem(item.id)}}>sil</button>
</div>
))}
   </div></div>
    );
};

export default Favori;