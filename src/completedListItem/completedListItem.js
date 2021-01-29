import React, { Component } from 'react';

import './completedListItem.css';

export default class CompletedListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            checkStatusC: true
        };
        this.handleChangeC = this.handleChangeC.bind(this);
    }

    handleChangeC(e) {
        this.setState({checkStatusC: !this.state.checkStatusC});
        if(this.state.checkStatusC){
            this.props.onMove();
            // this.props.onDelete();
            
        }
      }

   render(){
    return (
        <div className='completeLi'>
            <input 
                type="checkbox"
                defaultChecked={this.state.checkStatusC}
                onChange={this.handleChangeC}></input>
            <h2>{this.props.label}</h2>
        </div>
    )
   }
}