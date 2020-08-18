import React ,{ Component, Fragment}from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store/index';
import {getInputChangeAction, getAddItemAction ,deleteItemAction} from './store/actionCreators'


class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handlebuttonClick = this.handlebuttonClick.bind(this);
    store.subscribe(this.handleStoreChange); //當Store有改變時，執行此函數
  }

  render (){
    return (
      <div style={{marginTop : '10px', marginLeft : '10px'}}>
        <div >
          <Input placeholder="Basic usage" value={this.state.inputValue} style={{ width : '300px', marginRight : '10px'}} onChange={this.handleInputChange}/>
          <Button type="primary" onClick={this.handlebuttonClick}>提交</Button>
        </div>
        <List
          style={{ width : '300px', marginRight : '10px', marginTop : '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
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
    const action = deleteItemAction(index)
    store.dispatch(action);
  }

}


export default TodoList;
