import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // // USING ASYNC AWAIT
  // useEffect(() => {
  //   const loadData = async () => {
  //     const res = await fetch("https://restcountries.com/v3.1/all");
  //     const data = await res.json();
  //     setCountries(data);
  //   };
  //   loadData();
  // }, []);

  // // USING AXIOS
  // useEffect(() => {
  //   axios.get("https://restcountries.com/v3.1/all").then((res) => {
  //     console.log(res);
  //     setCountries(res.data);
  //   });
  // }, []);

  return (
    <div className="countries-area">
      <h2>Countries Of The World</h2>
      <div className="all-countries">
        {countries.map((country) => (
          // <Country name={country.name.common} capital={country.capital} population={country.population}></Country>
          <Country country={country} key={country.cca3}></Country>
          // <Country {...country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
