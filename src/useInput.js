import React, { Component, useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event =>{
        const {
            target : {value}
        } = event;
        let updateCk = true;
        if(typeof validator === 'function'){
            updateCk = validator(value);
        }
        if(updateCk){
            setValue(value);
        }
    }
    return {value, onChange};
}

const App = () =>{
    const maxLen = value => value.length < 10;
    const name = useInput("J.Doo", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name} /> 
        </div>);
}


export default App;