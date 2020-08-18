import React ,{ Component, Fragment}from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInputChangeAction, getAddItemAction ,deleteItemAction} from './store/actionCreators'
import ToDoListUI from './ToDoListUI'

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handlebuttonClick = this.handlebuttonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    store.subscribe(this.handleStoreChange); //當Store有改變時，執行此函數
  }

  render (){
    return (
      <ToDoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange ={this.handleInputChange}
        handlebuttonClick ={this.handlebuttonClick}
        handleItemDelete ={this.handleItemDelete}
      />
    )
  }
  
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)    
    store.dispatch(action); 
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handlebuttonClick(){
    const action = getAddItemAction()    
    store.dispatch(action);
  }

  handleItemDelete(index){
    console.log(index);
    const action = deleteItemAction(index)
    store.dispatch(action);
  }

}


export default TodoList;
