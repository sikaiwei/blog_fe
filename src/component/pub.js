import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import '../css/login.css';
import { observer } from 'mobx-react';
import { message } from 'antd';
import { inject } from '../utils';
import PostService from '../service/post';
import {Father} from './test';
import Sendmsg from './sendmsg';

import 'antd/lib/message/style';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import FormItem from 'antd/lib/form/FormItem';

const { TextArea } = Input;
const service = new PostService();

// export default class Login extends React.Component {
//     render() {
//         return < _Login service={service} />;
//     }
// }

@inject({ service })
@observer
export default class Pub extends React.Component {
   handleSubmit(event) {
       event.preventDefault();
       console.log('pub _______________')
       console.log(event.target, 'target target target target target target');
       let fm = event.target;
       this.props.service.pub(fm[0].value, fm[1].value);
       console.log(fm, fm[0].value, fm[1].value)
   }
    render() {  // 表单  antd
        return (
            <div>
            <Form onSubmit={this.handleSubmit.bind(this)} >
                <Form.Item label="标题"  wrapperCol={{span:5}} labelCol={{span:1}} >
                    <Input />
                </Form.Item>
                <Form.Item label="博文"  wrapperCol={{span:20}} labelCol={{span:1}} >
                    <TextArea rows={20} />
                </Form.Item>
                <Form.Item  wrapperCol={{span:20, offset: 20}} >
                <Button type="primary" htmlType="submit" >提交</Button>
                </Form.Item>
            </Form>
            <Father />
        </div>
        );
    }
}