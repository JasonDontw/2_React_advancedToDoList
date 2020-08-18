import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM , DELETE_TODO_ITEM} from './actionTypes'

const defaultState={
    inputValue : '',
    list : []
}
//reducer必須為純函數，且不能有副作用
//reducer只能接收State，絕不能直接修改State
export default (state = defaultState , action) => { 
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state)); //複製一份State因為不能直接修改State
        newState.inputValue = action.value;
        return newState;
    }else if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }else if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }

    return state;
}