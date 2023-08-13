import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../context/CountryContext';

function Country() {
    const { countryDetails } = useContext(CountryContext);

    const [country, setCountry] = useState();

    useEffect(() => {
        setCountry(countryDetails);
    }, [countryDetails]);

    return (
        country && <div className="country-details">
            <h1>Country Name: {country?.name}</h1>

            <img src={country?.flags.png} alt={country?.name} />

            <h1>Capital: {country?.capital}</h1>

            <h1>Region: {country?.region}</h1>

            <h1>Time Zone: {country?.timezones[0]}</h1>

            <h1>Population: {country?.population}</h1>
        </div>
    );
}

export default Country;
