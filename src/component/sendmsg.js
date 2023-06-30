import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button, Form, Input, Select, Icon, Collapse } from 'antd';
import { Row, Col, Spin } from 'antd';

import '../css/login.css';
import { observer } from 'mobx-react';
import { message } from 'antd';
import { inject } from '../utils';
import UserService from '../service/user';

import 'antd/lib/message/style';
import 'antd/lib/form/style';
import 'antd/lib/input/style';
import 'antd/lib/button/style';
import 'antd/lib/select/style';
import 'antd/lib/icon/style';
import 'antd/lib/collapse/style';
import 'antd/lib/row/style';
import 'antd/lib/col/style';

import FormItem from 'antd/lib/form/FormItem';

const { TextArea } = Input;
const service = new UserService();

const { Option } = Select;
const InputGroup = Input.Group;
const { Panel } = Collapse;



@inject({ service })
@observer
export default class Sendmsg extends React.Component {
    constructor(props){
        super(props);
    // console.log( this.props.form.getFieldDecorator.initialValue)
    //comment
    }
    state = { loading: false };

    handleChange(value, event) {
        // this.setstat(robotid=value.key);
        this.props.service.robotid=value.key;
        // this.props.robotid = value;
        console.log(this,this.props.service,"props props");
        console.log(value); // { key: "lucy", label: "Lucy (101)" }
    }

   handleSendmsg(event) {
       event.preventDefault();
       console.log('pub _______________')
       console.log(event.target, 'target target target target target target');
       let fm = event.target;
       console.log(fm, fm[0].value,fm[3],this.props.service.robotid, this.props,'sendmsgsendmsgsendmsgsendmsgsendmsgsendmsg')
    //    this.setState({ loading: true });
        console.log(this.props.service.sendload);
       this.props.service.sendmsg(this.props.service.robotid, fm[0].value);
       console.log(this.props.service.sendload);
    //    this.setState({ loading: false });
    //    console.log(fm, fm[0].value, fm[1].value, 'sendmsgsendmsgsendmsgsendmsgsendmsgsendmsg')
   }
   
    render() {  // 表单  antd
        console.log(this.value,"value value")
        // const { getFieldDecorator } = this.props.form;
        // console.log(getComputedStyle,"getFieldDecorator <======")
        return (
            <div>
                <Row type="flex" justify="space-between" align="bottom" >
                <Col span={14} >
                    <Form onSubmit={this.handleSendmsg.bind(this)} >
                        {/* <Form.Item label="webhook"  wrapperCol={{span:5}} labelCol={{span:1}} >
                            <Input />
                        </Form.Item> */}
                        <Form.Item label="选择钉钉机器人"  wrapperCol={{span:10}} labelCol={{span:3}} >
                            <Select
                                labelInValue
                                defaultValue={{ key: '监控 (100)' }}
                                style={{ width: 120 }}
                                onChange={this.handleChange.bind(this)}>
                            <Option value="https://oapi.dingtalk.com/robot/send?access_token=1b4880977bea364676fac94733a6d9cb2d9a111c3c6127324ffe82460f7e2741">监控 (100)</Option>
                            <Option value="https://oapi.dingtalk.com/robot/send?access_token=6c9e268d86c83a86a18cfd20a6d7c432f3bea0d50a290beac05a277aca2cc91c">tms (101)</Option>
                            </Select>
                        </Form.Item>
                        <Spin spinning={this.props.service.sendload} size="large" tip="Sendding...">
                        <Form.Item label="信息"  wrapperCol={{span:20}} labelCol={{span:1}} >
                            <TextArea rows={10} defaultValue={this.props.service.msgmoden} />
                        </Form.Item>
                        <Form.Item  wrapperCol={{span:10, offset: 10}} >
                        <Button type="primary" htmlType="submit" >
                        发送
                        </Button>
                        </Form.Item>
                        </Spin>

                        <Form.Item  wrapperCol={{span:20, offset: 1}} >
                    
                        </Form.Item>
                    </Form>
                </Col>

            </Row>

 
            <div>
                <Row type="flex" justify="space-between" align="bottom" >
                <Col span={14} >

                    <Collapse>
                        <Panel header="消息模板 1" key="1">
                        <p>{this.props.service.msgmoden}</p>
                        </Panel>
                        <Panel header="消息模板 2" key="2">
                        <p>{this.props.service.msgmoden}</p>
                        </Panel>
                        <Panel header="消息模板 3" key="3" disabled>
                        <p>{this.props.service.msgmoden}</p>
                        </Panel>
                    </Collapse>

                </Col>
                <Col span={9}>
                <div>
                <div>
                    <p>如下为一个信息格式模板，可用于测试验证<br/>=======================================</p>
                    <p>
                    ## **监控告警** <br />
                    --- <br />
                    > ![](http://43.240.126.23:5580/s/ftt67peqW5rB7yD/preview) <br /><br />

                    这种代理方式配置好后，注意原先请求的路径要更改下，否则会报错404，接口路径找不到：<br />
                    ### **说明：** <br />
                    - （1）优点：可以配置多个代理，灵活控制请求是否走代理（请求接口前缀增加/api1与否决定）  <br />
                    - （2）缺点：配置繁琐，前端请求资源时 <br />
                    <br />
                    ###### hmg ee git vs-push
                    </p>
                </div>
                </div>
                </Col>
                </Row>
            </div>

           </div>
        );
    }
}