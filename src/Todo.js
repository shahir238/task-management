import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card, } from 'react-bootstrap';

export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItems:[]
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData= this.addData.bind(this);
        this.delete= this.delete.bind(this);
    }
        onChangeHandler(event){
            var inputVal = event.target.value;
            this.setState({
                item:inputVal
            })
        }
        addData(){
            var inputVal = this.state.item;
            var itemInstance= this.state.todoItems;
            itemInstance.push(inputVal);
            this.setState({
                todoItems:itemInstance,
                item:''
            })
        }
        delete(event){
            var id = event.target.id;
            var itemInstance= this.state.todoItems;
            itemInstance.splice(id,1);
            this.setState({
                todoItems:itemInstance
                
            })
        }

    render() {
        var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>{e} <span onClick={this.delete} id={i}>X</span> </li>
        )
        return(
            <Card bg="success" border="secondary" text="#637561" style={{ width: '50rem' }} className='cd' >
            <div className="header"><h1><Card.Title>Task Management App</Card.Title></h1></div>
            <div className="body"> </div>
            <ul>
            {itemList }
            </ul>
            <div className="footer">
                <input  type="text" value={this.state.item} onChange={this.onChangeHandler} className="field" />
                <Button onClick={this.addData} bsStyle="success">submit</Button>
            </div>
            </Card>
        )
    }
}


