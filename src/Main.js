import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import './style.css';

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => {
        setItems(res.data.meals); // Set the meals data from API response
      })
      .catch(err => {
        console.error(err); // Log any errors that occur during the fetch
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section className='card'>
      {items.map((item) => (
        <div key={item.idMeal} className='card-item'>
          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <section className='content'>
            <p>#{item.idMeal}</p>
          </section>
        </div>
      ))}
    </section>
  );
}

export default Main;
