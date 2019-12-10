import React from 'react';
import PropTypes from "prop-types"



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

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} rating={dish.rating} key={dish.id} />
}

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} width='200px' alt={name}></img>
  </div>
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
