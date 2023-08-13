import React from "react";
import { CountryInfo, InputForm } from "./constants";

export default function App() {
    return (
        <div className="App">
            <h1 className="title">Country Details App</h1>
            <InputForm />
            <CountryInfo />
        </div>
    );
}
