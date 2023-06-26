import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { observer } from 'mobx-react';
import {message, Card} from 'antd';
import 'antd/lib/message/style';
import { inject } from '../utils';
import PostService from '../service/post';
import 'antd/lib/message/style';
import 'antd/lib/card/style';
const service = new PostService();


@inject({service})
@observer
export default  class Post extends React.Component{
    constructor(props){
        super(props);
        console.log(props.match.params.id);
        let {id=0} = props.match.params;
        console.log(id);
        props.service.getpost(id);
    }

    render () {
        
        const {title, author, author_id, pubdate, content} = this.props.service.post;
        
        return <Card title= {title} bordered={false} style={{width: 600}}>
        <p>作者 <a href={author_id}>{author_id}</a> 日期 {new Date(pubdate * 1000).toLocaleDateString()}</p>
        <p>{content}</p>


        </Card>
    }
}