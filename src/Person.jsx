import React from 'react';

const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <div className="person-info">
        <img src={image} alt={name} className="person-img" />
        <h4>{name}</h4>
        <h4>{age} years</h4>
      </div>
    </article>
  );
};

export default Person;
