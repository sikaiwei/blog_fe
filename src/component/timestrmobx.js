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

const service = new UserService();

// export default class Login extends React.Component {
//     render() {
//         return < _Login service={service} />;
//     }
// }

@inject({service})
@observer
export default class Timestr extends React.Component {
    // state = {'ret':-1}
    constructor(props){
        super(props);
        // const {location:{search}} = props;
        // console.log(search);
        props.service.gettimestr();
        this.props.service.timestr = '00:00:00';
        console.log(this.props.service.timestr, "ddddddddddddddddd");
        
    }

    // handleClick(event) {
    //     event.preventDefault();
    //     // let fm = event.target.form;
    //     //let ret =
    //     this.props.service.getcliaddress();
    //     this.props.service.gettimestr();
    //     // 如果ret有返回值，我就认为你登录成功了
    //     console.log( 'in cliaddress.js  +++++++++++++++++++++')
    // }

    render() {
        

            // let clientip = this.props.service.clientip
            // console.log(this.clientip,'---------------------------------')
        return (<div>
            已登录 <br/>
            <a>clientip : clientip time {this.props.service.timestr} </a>
            <br/>
            <p> <Link to="/list">文章列表</Link></p>
        
        </div>
    
    );
        // }
        // else return (<div>未登录 <br/><br/><p> <Link to="/login">请登录</Link></p></div>);
        console.log('observer login  ~~~~~~~~~~~~~~~~')
        
    }
}


@inject({service})
@observer
class Clientaddressstr extends React.Component {
    // state = {'ret':-1}
    constructor(props){
        super(props);
        // const {location:{search}} = props;
        console.log(this, this.props,this.props.service.clientip, this.email,'ssssssssssssssssssssssssssssssssss');
   
        
    }

    // handleClick(event) {
    //     event.preventDefault();
    //     // let fm = event.target.form;
    //     //let ret =
    //     this.props.service.getcliaddress();
    //     this.props.service.gettimestr();
    //     // 如果ret有返回值，我就认为你登录成功了
    //     console.log( 'in cliaddress.js  +++++++++++++++++++++')
    // }

    render() {
        
        console.log(this.clientip, this.email);

            // let clientip = this.props.service.clientip
            // console.log(this.clientip,'---------------------------------')
        return (<div>
           {this.email} {this.props.service.clientip}
        </div>
    
    );
        // }
        // else return (<div>未登录 <br/><br/><p> <Link to="/login">请登录</Link></p></div>);
        console.log('observer login  ~~~~~~~~~~~~~~~~')
        
    }
}

export {Clientaddressstr};