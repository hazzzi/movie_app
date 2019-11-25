import React from 'react';

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} width='200px'></img>
  </div>
}

const foodILike = [
  {
    name: "kimchi",
    image: "http://placeimg.com/640/480/animals",
  },
  {
    name: "mandoo",
    image: "http://placeimg.com/640/480/animals",
  },
  {
    name: "ramen",
    image: "http://placeimg.com/640/480/animals",
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
