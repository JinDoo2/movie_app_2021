import React, {  useState, useEffect, useRef} from "react";

const usePreventLeave = (onBefore) =>{
    const handle = event => {
        const {clientY} = event;
        if(clientY <= 0 ){
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave",handle);
    }, [])

    if(typeof onBefore !== "function"){
        return;
    }
}

const App = () =>{
    const begForLife = () => console.log("please dont leave!!");
    usePreventLeave(begForLife);
    return (
        <div className="App">
            <h1>Hellow</h1>
        </div>);
}


export default App;