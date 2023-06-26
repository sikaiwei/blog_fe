import React from 'react';
import ReactDom from 'react-dom';
import { observer } from 'mobx-react';
import { message, List } from 'antd';
import { inject, parse_qs } from '../utils';
import PostService from '../service/post';

import 'antd/lib/message/style';
import 'antd/lib/list/style';

import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';

const service = new PostService();


@inject({ service })
@observer
export default class L extends React.Component {
    constructor(props){
        super(props);
        const {location:{search}} = props;
        console.log(search);
        props.service.getall(search)
    }

    handleChange(pageNo, pageSize){
        let search = '?page=' + pageNo + '&size=' + pageSize;
        // this.props.service.getall(search);
        window.location.href = '/list' + search;

    }

    geturl(pageNo) {
        const { location: {search} } = this.props;
        let {size=20} = parse_qs(search);
        return '/list?page=' + pageNo + '&size=' + size;
    }

    itemRender(current, type, originalElement) {
        if (current == 0 ) return originalElement;
        if (type === 'page')  {
            return <Link to={this.geturl(current)}>{current}</Link>;
        }
        if (type === 'prev') {
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'></Link>;
        } if (type === 'next') {
            return <Link to={this.geturl(current)} className='ant-pagination-item-link'></Link>;
        }
        return originalElement;
    }

    render() {
        const data = this.props.service.posts;
        console.log(data.length,"lenth0000lllllllllllll")
        if (data.length){
            const pagination = this.props.service.pagination;
            return (
                <List bordered={true}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to={'/post/' + item.post_id}>{item.title}</Link>}
                            />
                        </List.Item>
                    )}
                    pagination = {{
                        onChange: this.handleChange.bind(this),
                        pageSize: pagination.size, //每页多少行
                        total: pagination.count, //数据总数
                        current: pagination.page, //当前页
                        itemRender: this.itemRender.bind(this)
                    }}
                />
            );
    } else
    this.data = {}
    console.log(data.length,"lenth0000lllllllllllll else else else else")
    return <div>please login <Link to="/login">请登录</Link></div>;
    }
}
