import axios from 'axios'
import { observable } from 'mobx';
import store from 'store';
import { Pagination } from 'antd';

export default class PostService {
    constructor() {
        this.instance = axios.create({
            baseURL: '/api/post/',
        });
        this.state = { error : null }
    }

    @observable done = false;
    @observable errMsg = '';
    @observable error = '';
    @observable login = true;
    @observable posts = [];
    @observable pagination = {page:1, size:20, pages:1, count:0 };
    @observable post = {};
    

    pub(title, content, obj) {

        // new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         console.log('timeout  ++++++++++');
        //         resolve('ok');
        //     }, 5*1000)
        // }).then(value=>{
        //         obj.setState({'ret':parseInt(Math.random() * 100)}),
        //         console.log('then  +++++++++++')
        //     })

        this.instance.post('pub', {
            title, content
        }, {
                headers: { 'JWT': store.get('token') }
            }
        ).then(response => {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            this.errMsg = '文章提交成功';
        }).catch(error => {
            console.log(error);
            this.errMsg = '文章提交失败';
        });

        console.log(title, content, "PPPPPPPPPPPPPP");   //如何传，传什么，返回什么，怎么返回
    }
    getall(search) {
        this.instance.get(search
        , {
                headers: { 'JWT': store.get('token') }
            }
        ).then(response => {
            console.log(response);
            console.log(response.data); // posts:[post,post], pagination:{}
            console.log(response.status);
            this.posts = response.data.posts;
            this.pagination = response.data.pagination;
            this.status = response.status;
            console.log(this.status, 'sssssssssssssssssssstttttttttttttttttt');

        }).catch(error => {
            console.log(error);
            console.log(this.status, 'sssssssssssssssssssstttttttttttttttttt');
            this.error = error
            console.log(this.error, 'sssssssssssssssssssstttttttttttttttttt');
            if (this.error){
                this.login = false;
                // return <div>please login <Link to="/login">请登录</Link></div>;
                // return <div>please login <Link to="/login">请登录</Link></div>;
            }
            this.errMsg = '文章列表错误';
            console.log(this.errMsg)
        });
    }

    getpost(id){
        this.instance.get(id).then(response => {
            console.log(response);
            console.log(response.data); // posts:[post,post], pagination:{}
            console.log(response.status);
            this.post = response.data.post;

        }).catch(error => {
            console.log(error);
            this.errMsg = '文章加载错误';
        });
    }

}














