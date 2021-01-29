import React, {Component} from 'react';
import Header from '../header/header';
import AddingNewTodo from '../addingNewTodo/addingNewTodo';
import TodoList from '../todoList/todoList';
import CompletedBlock from '../completedBlock/completedBlock';
import CompletedList from '../completedList/completedList';

import '../app/app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Задание 1', id:'kfoi21'},
                {label: 'Задание 2', id:'kdjio33'},
                {label: 'Задание 3', id:'loiu41'}
            ],
            completeTodo: [
                {label: 'Задание 4', id:'etfert21'},
                {label: 'Задание 5', id:'55y533'},
                {label: 'Задание 6', id:'l5y55t1'}
            ]
        };

        this.deleteTodo = this.deleteTodo.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.moveTodo = this.moveTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
    }

    deleteTodo(id){
        this.setState(({data, completeTodo}) => {
            const indexTodo = data.findIndex(elem => elem.id === id);
            const indexCompleteTodo = completeTodo.findIndex(elem => elem.id === id);
            if(indexTodo >= 0){
                const newArr =[...data.slice(0, indexTodo), ...data.slice(indexTodo+1)];
                return {
                    data: newArr
                }
            } else if(indexCompleteTodo >= 0){
                const newArr =[...completeTodo.slice(0, indexCompleteTodo), ...completeTodo.slice(indexCompleteTodo+1)];
                return {
                    completeTodo: newArr
                }
            }           
        })
    }

    deleteAll(){
        const conf = window.confirm('Удалить все завершенные задачи?');
        if (conf){
            this.setState(() => {
                const newArr = [];
    
                return {
                    completeTodo: newArr
                }
            })
        }
    }

    addTodo(str){
        if(str.length > 0){
            const newTodo = {
                label: str,
                id: 40000*Math.random(10000)
            }
            
    
            this.setState(({data}) => {
                const newArr = [...data, newTodo];
                return {
                    data: newArr
                }
            })   
        }
    }

    moveTodo(id){
        this.setState(({data, completeTodo}) => {
            const indexTodo = data.findIndex(elem => elem.id === id);
            const indexComTodo = completeTodo.findIndex(elem => elem.id === id);
            if(indexTodo >= 0){
                return {
                    data: [...data.slice(0, indexTodo), ...data.slice(indexTodo+1)],
                    completeTodo: [this.state.data[indexTodo], ...completeTodo]
                }
            } else if(indexComTodo >= 0){
                const newArrTodo2 = [...data, this.state.completeTodo[indexComTodo]];
                const newArrComTodo2 =[...completeTodo.slice(0, indexComTodo), ...completeTodo.slice(indexComTodo+1)];
                return {
                    data: newArrTodo2,
                    completeTodo: newArrComTodo2
                }
            }
        })
    }

    changeTodo(id){
        this.setState(({data}) => {
            const indexTodo = data.findIndex(elem => elem.id === id);
            const newLabel = window.prompt('Изменить задание', this.state.data[indexTodo].label);
            const newTodo = {
                label: newLabel,
                id: 40000*Math.random(10000)
            } 
            return {
                data: [...data.slice(0, indexTodo), newTodo, ...data.slice(indexTodo+1)],
            }    
        })
    }

    render(){
        return (
            <div className='app_container'>
                <Header/>
                <AddingNewTodo 
                    onAddTodo={this.addTodo}/>
                <TodoList 
                    data={this.state.data}
                    onDelete={this.deleteTodo}
                    onMove={this.moveTodo}
                    onChangeTodo={this.changeTodo}
                    />
                <CompletedBlock
                    onDeleteAll={this.deleteAll}/>
                <CompletedList 
                    completeTodo={this.state.completeTodo}
                    onMove={this.moveTodo}
                    onDelete={this.deleteTodo}
                    />
            </div>
        )
    }
    
}

export default App;