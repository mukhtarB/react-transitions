import React, { Component } from 'react';
import '../css/App.css';

class TransitionComp extends Component{

    // defining default state
    state = {
        show: true
    }

    // func to toggle state of div -> on click of toggle button
    // not using --(a), since direct manipulation of the original content of the state is considered bad practice
    toggleDiv = () => {
        this.setState({
            // show: !this.state.show ------ (a)
            show: this.state.show ? false : true
        })
    }

    render(){

        return(
            <div>
                    <div style = {{
                        background:'red',
                        height: '80px', 
                        textAlign: 'center'
                    }}> Transition, <br /> state = {`${this.state.show}`} </div>
                <button onClick = {this.toggleDiv}> Toggle show / hide </button>
            </div>

        )

    }
}


export default TransitionComp;