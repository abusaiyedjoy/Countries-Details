import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [addvisited, setaddvisited]=useState([]);
    const handleVisited=country=>{
        const newVisitedCountries = [...addvisited , country]
        setaddvisited(newVisitedCountries);
    }
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <h2>Visited country: {addvisited.length}</h2>
            <ol>
                {
                    addvisited.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                    handleVisited={handleVisited}
                    country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;