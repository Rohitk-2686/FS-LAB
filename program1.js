import React from "react";


const countries=[
    {name: "India", capital: "New Delhi"},
    {name: "Sri Lanka", capital: "Colombo"},
    {name: "China", capital: "Beijing"},
    {name: "Nepal", capital: "Kathmandu"},
    {name: "Bhutan", capital: "Thimpu"},
    
];

const CountryList= () => {
    return (
        <ul>
            {countries.map((country) =>(
                <li key={countries.name}><strong>{country.name}</strong> - {country.capital}</li>)
            )}
        </ul>
    )
}

export default CountryList;
