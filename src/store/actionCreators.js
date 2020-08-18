import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () =>({
    type: ADD_TODO_ITEM,
});

export const deleteItemAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
});

//使用redux-thunk
export const getTodoList = () =>{  //reducer正常來說只能返回物件，但使用中間件redux-thunk後可以允許返回function
   return (dispatch) => {
        // axios.get('./list').than((res)=>{  
        //      const data = res.data;
        //      const action = initListAction(data);
        //      dispatch(action)
        //   });
   }
};

export const getInitList = () =>({
    type: GET_INIT_LIST,
});