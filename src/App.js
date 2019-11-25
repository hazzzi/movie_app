import React from 'react';
import PropTypes from "prop-types"

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} width='200px' alt={name}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "http://placeimg.com/640/480/animals",
    rating: 5
  },
  {
    id: 2,
    name: "mandoo",
    image: "http://placeimg.com/640/480/animals",
    rating: 4.9
  },
  {
    id: 3,
    name: "ramen",
    image: "http://placeimg.com/640/480/animals",
    rating: 4.8
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
