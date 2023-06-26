import React from 'react';
import ReactDom from 'react-dom';
import { observer } from 'mobx-react';
// import { Button } from 'antd/lib/radio';
import { Button, Space } from 'antd';
import UserService from '../service/user';
import { inject } from '../utils';


const service = new UserService();

@inject({service})
@observer
class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.props.service.getcliaddress()

    //     // const {location:{search}} = props;
    //     // console.log(search);
    //     // props.service.gettimestr();
    //     // this.props.service.timestr = '00:00:00';
    //     // console.log(this.props.service.timestr, "ddddddddddddddddd");
    //     // const {clientip} = props.service;
        let address = this.props.service.clientip;
        console.log(this,this.props, address, 'ip ip ip ip ip');

        this.props.onipChange(this.props.service.clientip);


    }

 
    
    state = {flag: true, light: true, time: ""};
    handleClick(event) {
        console.log(event.target.id);
        console.log(event.target === this);
        console.log(this);
        console.log(this.state);
        // this.setState({ flag: !this.state.flag });
        // setInterval(() => this.setState({ flag: !this.state.flag }), 5000 );
        console.log(Date())
        
        
    }

    componentDidMount(){
        // this.timer = setInterval(() => {
        //     this.setState({
        ///         flag: !this.state.flag,
        //     })
        // }, 1000);
        this.lighttimer = setInterval(() => {
            this.setState({
                light: !this.state.light,
                time: Date().substring(16,25),
            })
        }, 1000);
    }

    componentWillUnmount(){ //组件即将卸载
        // 相当于vue中的beforeDestory
        if (this.lighttimer != null) {
        clearInterval(this.lighttimer)
        };
    }


    render() {
        // setTimeout(() =>  )
        // setTimeout(() => this.setState({ flag: !this.state.flag }), 5000 );
        // setInterval(() => this.setState({ flag: !this.state.flag }), 5000 );
        // this.props.service.getcliaddress()
        console.log(this.props.service, 'ip ip ip ip ip', this.props.service.clientip)
        // this.changeIp(this.props.service.clientip)
        return <div>
        
        <div id="t1" onClick={this.handleClick.bind(this)}>
            欢迎登录。{this.props.service.email} {this.props.service.clientip}
        <p> 时间 : <Button type="primary" >{this.state.time}</Button>  </p>
         </div>
        {/* <p> light : {this.state.light.toString()}</p> */}
         </div>
        //    return <div>
        
        
        //        欢迎登录。{this.props.service.email} {this.props.service.clientip}
      
        //     </div>
    }

}

export { Toggle};





