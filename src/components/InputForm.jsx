import React, { useEffect, useState } from 'react';
import '../styles/InputForm.css';

function InputForm() {
    let [countries, setCoutries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            let result = await fetch('https://restcountries.com/v2/all').then(res => {
                return res.json();
            }).then(response => {
                return response;
            });
            setCoutries(result);
        }

        getCountries();
    },);

    return (
        <div className='form-container'>
            <form action="" className="country-selection-form">
                <label htmlFor="country">Select a country you want to get details of:</label>

                <select name="" id="country">
                    <option value="">Select Country</option>
                    {/* <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option> */}

                    {countries?.map(country => {
                        return (
                            <option value={country.name} key={country.alpha3Code}>
                                {country.name}
                            </option> 
                        );
                    })}
                </select>
            </form>
        </div>
    );
}

export default InputForm;
