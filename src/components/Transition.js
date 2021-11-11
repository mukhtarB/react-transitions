import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
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
                {/* <Transition/> wrapps around the element to display the effect and returns them via a func */}
                {/* takes in props of in and timeout */}
                <Transition
                    in={this.state.show}
                    timeout={2000}
                >

                    { (transitionState) => 
                         <div style = {{
                            background:'red',
                            height: '80px', 
                            textAlign: 'center',
                            color: 'cyan'
                        }}> Transition, <br /> state = {`${this.state.show}`} <br /> trans-state = {transitionState} </div>
                    }

                </Transition>
                    
                <button onClick = {this.toggleDiv}> Toggle show / hide </button>
            </div>

        )

    }
}


export default TransitionComp;

// NB: Transition do not do the animations the return a function that help you with monitoring
// the state of the transition as it occurs, ENTERING, ENTERED, EXITING, EXITED

// it also does not return a div / Element, it returns a function that return the jsx (like noticed in hoc)..
// this returned function can take in an arg used to monitor the state of the transition at a given moment