import React, { Component } from 'react';

import './addingNewTodo.css';

export default class AddingNewTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })        
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state.text);
        this.setState({
            text: ''
        })
    }
    
    render(){
        return (
            <form 
                className='addingNewTodoContainer'
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="Введите новое задание"
                    onChange = {this.onValueChange}
                    value={this.state.text} /> 
                <button type='submit'>Добавить</button>
            </form>
        )
    }
}