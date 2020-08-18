import React ,{ Component}from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInputChangeAction, getAddItemAction, deleteItemAction, getTodoList, initListAction, getInitList} from './store/actionCreators';
import ToDoListUI from './ToDoListUI';
import axios from 'axios';

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

  componentDidMount(){
  //    axios.get('./list').than((res)=>{   //異步執行寫法一
  //           const data = res.data;
  //          const action = initListAction(data);
  //          store.dispatch(action)
  //    });

  //    const action = getTodoList(); //異步寫法二 thunk
  //    store.dispatch(action); //當action被dispatch調用時，如果store發現action是函數時則會馬上被執行
       
        const action = getInitList(); //異步寫法三 saga
        store.dispatch(action);
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
    const action = deleteItemAction(index)
    store.dispatch(action);
  }

}


export default TodoList;
