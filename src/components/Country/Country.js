import React from "react";
import "./Country.css";

const Country = (props) => {
  const { capital, area, population, name, flags, region } = props.country;

  return (
    <div className="single-country">
      {/* <h3>Country Name: {props.name}</h3>
      <p>Capital: {props.capital}</p> */}

      <h4>{name.common}</h4>
      <img src={flags.png} alt="" />
      <p>
        <span>Capital:</span> {capital}
      </p>
      <p>
        <span>Population: </span>
        {(population / 1000000).toFixed(2)} million
      </p>
      <p>
        <span>Area:</span> {area} km²
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
    </div>
  );
};

export default Country;
