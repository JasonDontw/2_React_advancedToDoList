import React, { Component } from 'react';
import { Input,Button,List } from 'antd';

const ToDoListUI = (props) =>{ //無狀態組件，效能較高，在沒有任何邏輯，單純渲染時使用 
    return(
        <div style={{marginTop : '10px', marginLeft : '10px'}}>

        <div >
            <Input placeholder="Basic usage" value={props.inputValue} style={{ width : '300px', marginRight : '10px'}} onChange={props.handleInputChange}/>
            <Button type="primary" onClick={props.handlebuttonClick}>提交</Button>
        </div>

        <List
        style={{ width : '300px', marginRight : '10px', marginTop : '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
            <List.Item onClick={ () => props.handleItemDelete(index)}>
                {item}
            </List.Item>
            )}
        />
        </div>
    )
}
// class ToDoListUI extends Component {  //容器組件
//     render() {
//         return (
//             <div style={{marginTop : '10px', marginLeft : '10px'}}>

//                 <div >
//                     <Input placeholder="Basic usage" value={this.props.inputValue} style={{ width : '300px', marginRight : '10px'}} onChange={this.props.handleInputChange}/>
//                     <Button type="primary" onClick={this.props.handlebuttonClick}>提交</Button>
//                 </div>

//                 <List
//                 style={{ width : '300px', marginRight : '10px', marginTop : '10px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (
//                     <List.Item onClick={ () => this.props.handleItemDelete(index)}>
//                         {item}
//                     </List.Item>
//                 )}
//                 />
//             </div>
//         )
//     }
// }

export default ToDoListUI