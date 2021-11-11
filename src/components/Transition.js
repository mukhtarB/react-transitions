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
                    timeout={{
                        enter: 50,
                        exit: 3000
                    }}

                    // mountOnEnter
                    // unmountOnExit
                    
                    // triggers entering / exiting as true or false
                    enter={true}
                    exit={false}

                    // onEnter and onExit only work if enter and exit are true
                    onEnter = {() => {
                        console.log('entering')
                    }}

                    onExit = {() => {
                        // toggle exit to fasle to see effect
                        console.log('exiting')
                    }}

                >

                    { (transitionState) => 
                        <div className = {`boxed boxed-${transitionState}`}> 
                            Transition, <br /> 
                            state = {`${this.state.show}`} <br /> 
                            trans-state = {transitionState} 
                            {/* {console.log(transitionState)} */}
                        </div>
                    }

                </Transition>
                    
                <button onClick = {this.toggleDiv} className = 'showDiv'> Toggle show / hide </button>
            </div>

        )

    }
}


export default TransitionComp;

// NB: Transition do not do the animations the return a function that help you with monitoring
// the state of the transition as it occurs, ENTERING, ENTERED, EXITING, EXITED

// it also does not return a div / Element, it returns a function that return the jsx (like noticed in hoc)..
// this returned function can take in an arg used to monitor the state of the transition at a given moment