import React from 'react';
import ReactDom from 'react-dom';
import { Redirect, Link } from "react-router-dom";
import { Button } from 'antd';
import '../css/login.css';
import UserService from '../service/user';
import { observer } from 'mobx-react';
import {message} from 'antd';
import 'antd/lib/message/style';
import { inject } from '../utils';

const service = new UserService();

// export default class Reg extends React.Component {
//     render () {
//         return <_Reg service={service} />;
//     }
// }

@inject({service})
@observer
export default  class Reg extends React.Component{
    handleClick(event){
        event.preventDefault();
        let fm = event.target.form;
        //用户名 密码验证， 邮箱验证
        this.props.service.reg(fm[1].value, fm[2].value, fm[0].value);
        // 如果ret有返回值，我就认为你登录成功了
    }

    render(){
        if (this.props.service.errMsg) {
            message.info(this.props.service.errMsg, 3, ()=>{
                this.props.service.errMsg = '';
            } );
        }
        if (this.props.service.regged) {
            console.log( '---------------------------------')
            return (< Redirect to='/' />);
        }
        console.log('observer  regged ---------------------------------')
      return (
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="用户" />
                    <input type="text" placeholder="邮箱" />
                    <input type="password" placeholder="密码" />
                    <input type="password" placeholder="确认密码" />
                    <button onClick={this.handleClick.bind(this)}>注册</button>
                    <p className="message">如果已注册 <Link to="/login">请登录</Link></p>
                </form>
            </div>
        </div>
      );
  }
  }