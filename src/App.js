import React from "react";
import InputForm from "./components/InputForm";
import Country from "./components/Country";

export default function App() {
    return (
        <div className="App">
            <h1 className="title">Country Details App</h1>
            <InputForm />
            <Country />
        </div>
    );
}
