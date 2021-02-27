import React, { Component, useState } from "react";

const App3 = () =>{
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    const updateEmail = e =>{
        const{
            target : {value}
        } = e;
        setEmail(value);
    }
    return (<div>
            {count} 
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>);
}


/** class 형 */
// class App3Ugly extends React.Component{
//     state = {
//         item:1
//     };
//     render(){
//         const {item} = this.state;
//         return (
//             <div className="App3">
//                 <h1>Hello {item}</h1>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//             </div>
//         );
//     }
//     increment = () => {
//         this.setState(state =>{
//             return {
//                 item : state.item + 1
//             }
//         });
//     };
//     decrement = () => {
//         this.setState(state =>{
//             return {
//                 item : state.item - 1
//             }
//         });
//     };
// }

export default App3;