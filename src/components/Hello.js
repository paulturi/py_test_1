import React, { Component } from "react";

// function Hello(props){
//     return(
//         <h1>Hello{props.name}</h1>
//     )
// }

class Hello extends React.Component {
    render(){
        return(
            <h1>Goodbye {this.props.name}</h1>
        )
    }
    
}
export default Hello;