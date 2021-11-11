import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import '../css/App.css';

class Slide extends Component{
    state = {
        items:[]
    }
    
    generateElements () {
        return this.state.items.map((item,i) => (
            <li className="item" key={i}>{item}</li>
        ));
    }

    addNumber(){
        //let random = Math.floor(Math.random() * 100) + 1;
        let newArray = [...this.state.items, Math.floor(Math.random() * 100) + 1]

        this.setState({
            items:newArray
        })
    }

    removeNumber(){
        let newArray = this.state.items.slice(0,-1);
        this.setState({
            items:newArray
        })
    }

    render(){
        return(
            <div>
                {this.generateElements()}
                
            
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.addNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }



}


export default Slide;