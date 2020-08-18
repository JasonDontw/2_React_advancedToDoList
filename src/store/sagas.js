import {takeEvery ,put} from 'redux-saga/effects' //用來截獲每次執行的action
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try{
    const res = yield axios.get('./list');
    const action = initListAction(res.data);
    yield put(action);
  }catch(err){
    console.log('err');
  }
  
} 

function* TodoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList) //只要捕獲到的action type是GET_INIT_LIST則執行getInitList
}
  
export default TodoSagas;