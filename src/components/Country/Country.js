import React from "react";
import "./Country.css";

const Country = (props) => {
  const { capital, area, population, name, flags } = props.country;
  return (
    <div className="single-country">
      {/* <h3>Country Name: {props.name}</h3>
      <p>Capital: {props.capital}</p> */}

      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
