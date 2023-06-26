import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'antd';
import '../css/login.css';
import UserService from '../service/user';
import { observer } from 'mobx-react';
import { message } from 'antd';
import 'antd/lib/message/style';
import { inject } from '../utils';
import UserContext from '../service/usercontext';


const service = new UserService();

// export default class Login extends React.Component {
//     render() {
//         return < _Login service={service} />;
//     }
// }

@inject({service})
@observer
export default class Login extends React.Component {
    static contextType = UserContext;
    
    // state = {'ret':-1}
    handleClick(event) {
        event.preventDefault();
        let fm = event.target.form;
        //let ret =
        // this.props.usemail = fm[0].value
        this.props.service.login(fm[0].value, fm[1].value);
        const { userct } = this.context;
        // 如果ret有返回值，我就认为你登录成功了
        // console.log(userfn)
        userct.userchange(fm[0].value);
        console.log(fm + 'in login.js  +++++++++++++++++++++'+ fm[0].value);
    }

    render() {
        // if (this.state.ret != -1){
        //     console.log(this.state.ret, '---------------------------------')
        // return (< Redirect to='/about' />);
        // }

        if (this.props.service.errMsg) {
            message.info(this.props.service.errMsg, 3, () => {
                this.props.service.errMsg = '';
            });
        }
        if (this.props.service.loggedin) {
            let clientip = this.props.service.clientip;
            // const {usemail} = this.state;
            // console.log(clientip,'---------------------------------', this.state.get(usemail))
            // return (< Redirect to='/list' />);
            this.usemail = this.props.service.email
            console.log(this.usemail)
            console.log(this.props.service.clientip, 'ip ip ip ip ip log log log log')
            console.log(this.props.service)


            return (<div>已登录: {this.usemail} <br/><p> 登录ip: {clientip} <br/> <Link to="/list">文章列表</Link></p></div>);
        }
        // else return (<div>未登录 <br/><br/><p> <Link to="/login">请登录</Link></p></div>);
        console.log('observer login  ~~~~~~~~~~~~~~~~')
        // const { userfn } = this.context
        // const value = this.context;

          return (

            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="邮箱"  />
                        <input type="password" placeholder="密码"  />
                        <button onClick={this.handleClick.bind(this)}>登录</button>
                        <p className="message">未注册? <Link to="/reg">注册用户</Link></p>
                    </form>
                </div>
            </div>
            
        );
    
    }
}