import React from 'react';

export default function Image(props) {
  return (
      <div>
          <h3>{props.image.date}</h3>
    <img src= {props.image.url} alt='' />
    <h2>{props.image.title}</h2>
    <p>{props.image.explanation}</p>
    </div>
  )
};
