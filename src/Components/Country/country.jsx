import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisited}) => {
    const {name,population,area, flags,cca3}=country;
    const [visited, setvisited]=useState(false)
    const handleClick=()=>{
        setvisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Country: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleClick}>{ visited? 'Visit':'Going'}</button>
               {visited ? ' I have visited this country.' : 'I want to visit.'}
               <br />
               <br />
               <button onClick={()=>handleVisited(country)}>Mark as visited</button>

        </div>
    );
};

export default Country;