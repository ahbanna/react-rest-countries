import "./App.css";
// import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";
import Person from "./components/Person/Person";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      <Countries></Countries>
      <Person></Person>
      <Header></Header>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h2>All the countries name are listed below</h2>
//       {countries.map((country) => (
//         <Country name={country.name.common} capital={country.capital}></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   );
// }

export default App;
