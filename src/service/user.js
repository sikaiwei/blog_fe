import axios from 'axios'
import store from 'store';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

store.addPlugin(require('store/plugins/expire')); //过期插件

export default class UserService {
    @observable loggedin = false;
    @observable regged = false;
    @observable errMsg = '';
    @observable clieentip = '';
    @observable timestr = '';
    @observable clientip = '0.0.0.0';
    @observable email = '';
    @observable robotid = 'https://oapi.dingtalk.com/robot/send?access_token=1b4880977bea364676fac94733a6d9cb2d9a111c3c6127324ffe82460f7e2741';
    @observable sendload = false;
    @observable msgmoden = "\
## **监控告警** \n\n\
--- \n\
> ![](http://43.240.126.23:5580/s/ftt67peqW5rB7yD/preview) \n\
\n\
这种代理方式配置好后，注意原先请求的路径要更改下，否则会报错404，接口路径找不到：\n\
### **说明：** \n\
- （1）优点：可以配置多个代理，灵活控制请求是否走代理（请求接口前缀增加/api1与否决定）  \n\
- （2）缺点：配置繁琐，前端请求资源时 \n\
\
###### hmg";

    login(email, password, obj) {

        // new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         console.log('timeout  ++++++++++');
        //         resolve('ok');
        //     }, 5*1000)
        // }).then(value=>{
        //         obj.setState({'ret':parseInt(Math.random() * 100)}),
        //         console.log('then  +++++++++++')
        //     })
        axios.post('/api/user/login', {
            'email': email,
            'password': password
        })
            .then( response => {
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.data.clientaddress);

                store.set('token', response.data.token, (new Date()).getTime() + (8*3600*1000) );
                // obj.setState({ ret: 1000 });
                // this.loggedin = Math.random() * 100;
                this.loggedin = true;
                this.clientip = '';
                this.clientip = response.data.clientaddress;
                this.errMsg = this.clientip;
                this.email = email;
                console.log(this.clientip, this.email, 'dddddddddddddddddddddddddd');


            })
            .catch( error => {
                console.log(error);
                this.errMsg = '用户名或密码错误';
            });

        console.log(email, password, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
        // for (var d=new Date();(new Date()) -d < 3000;){};
        // return 100
    }

    reg(email, password, name) {
        axios.post('/api/user/reg', {
             email,password,name
        })
            .then( response => {
                console.log(response);
                console.log(response.data);
                console.log(response.status);

                store.set('token', response.data.token, (new Date()).getTime() + (8*3600*1000) );
                // obj.setState({ ret: 1000 });
                this.regged = true;
            })
            .catch( error => {
                console.log(error);
                this.errMsg = '注册失败，请检查数据';
            });
        console.log(email, password, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
    }

    getcliaddress(email, password, obj) {

        // new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         console.log('timeout  ++++++++++');
        //         resolve('ok');
        //     }, 5*1000)
        // }).then(value=>{
        //         obj.setState({'ret':parseInt(Math.random() * 100)}),
        //         console.log('then  +++++++++++')
        //     })

        axios.post('/api/user/clientaddress', {
            // 'email': email,
            // 'password': password
        })
            .then( response => {
                console.log(response);
                console.log(response.data, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
                console.log(response.status);
                this.clientip = response.data.clientaddress;

                // store.set('token', response.data.token, (new Date()).getTime() + (8*3600*1000) );
                // obj.setState({ ret: 1000 });
                // this.loggedin = Math.random() * 100;
                // this.loggedin = true;
            })
            .catch( error => {
                console.log(error);
                this.errMsg = '用户名或密码错误';
            });

        console.log(this.email, password, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
        // for (var d=new Date();(new Date()) -d < 3000;){};
        // return 100
    }

    gettimestr(){

               this.lighttimer = setInterval(() => {
                this.timestr = Date().substring(16,25)
                
            }, 1000);
   
    }
    
    sendmsg(webhook, text) {
        this.sendload = true;
        axios.post('/sendding/user/sendding', {
            'webhook': webhook,
            'text': text
        })
            .then( response => {
                console.log(response);
                console.log(response.data, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
                console.log(response.status);
                this.clientip = response.data.clientaddress;
                this.sendload = false;

                // store.set('token', response.data.token, (new Date()).getTime() + (8*3600*1000) );
                // obj.setState({ ret: 1000 });
                // this.loggedin = Math.random() * 100;
                // this.loggedin = true;
            })
            .catch( error => {
                console.log(error);
                this.errMsg = 'messages发送失败';
            });

        console.log(webhook, text, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
        // for (var d=new Date();(new Date()) -d < 3000;){};
        // return 100
    }
    
    // getcliaddress(email, password, name) {
    //     axios.get('/api/user/clientaddress')
    //         .then( response => {
    //             console.log(response);
    //             console.log(response.data ,"data" * 10);
    //             console.log(response.status);

    //             // store.set('token', response.data.token, (new Date()).getTime() + (8*3600*1000) );
    //             // // obj.setState({ ret: 1000 });
    //             // this.regged = true;
    //             this.cliaddress = clientaddress;
    //         })
    //         .catch( error => {
    //             console.log(error);
    //             this.errMsg = '注册失败，请检查数据';
    //         });
    //     console.log(email, password, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
    // }
}














