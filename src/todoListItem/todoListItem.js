import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            checkStatus: false
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({checkStatus: !this.state.checkStatus});
        if(!this.state.checkStatus){
            this.props.onMove();
        }
      }

    render() {
        return (
            <div className='todoListItem'>
                <input 
                    type="checkbox"
                    defaultChecked={this.state.checkStatus}
                    onChange={this.handleChange}
                    ></input>
                <h3 onDoubleClick={this.props.onChangeTodo}>{this.props.label}</h3>
                <div onClick={this.props.onDelete} className='icon-delete'>Удалить</div>
            </div>
        )
    }
}
