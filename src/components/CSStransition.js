import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/App.css';

class Fade extends Component{

    state = {
        show: true
    }

    toggleDiv = () => {
        this.setState({
            show: this.state.show ? false : true
        })
    }


    render(){
        return(
            <div>

                <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames={'boxed'}
                >

                    <div className='boxed'>
                        CSS TRANSITIONS
                    </div>

                </CSSTransition>

                <button onClick = {this.toggleDiv} className = 'showDiv'> Toggle show / hide </button>
                
            </div>
        )
    }
}


export default Fade;