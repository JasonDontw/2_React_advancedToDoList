import React, { Component } from 'react';
import { Input,Button,List } from 'antd';

class ToDoListUI extends Component {
    render() {
        return (
            <div style={{marginTop : '10px', marginLeft : '10px'}}>

                <div >
                    <Input placeholder="Basic usage" value={this.props.inputValue} style={{ width : '300px', marginRight : '10px'}} onChange={this.props.handleInputChange}/>
                    <Button type="primary" onClick={this.props.handlebuttonClick}>提交</Button>
                </div>

                <List
                style={{ width : '300px', marginRight : '10px', marginTop : '10px'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={ () => this.props.handleItemDelete(index)}>
                        {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }
}

export default ToDoListUI