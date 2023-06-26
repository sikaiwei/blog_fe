
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./login";
import L from './list';
import Post from './post';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Pub from './pub'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => (
  <div>
    <h2>Home !!</h2>
    <a href="/sys.html">sys  页面 </a>

  </div>
);

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
      <Layout collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ minHeight: '100vh' }}>
        <Sider   >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              {/* <Icon type="desktop" />
              <span>系统</span> */}
              <Link to="/login"><Icon type='login' />登录</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>部门</span>
                </span>
              }
            >
              <Menu.Item key="6">
              <Link to="/list"><Icon type='login' />文章目录</Link>
              </Menu.Item>
              <Menu.Item key="8">
              <Link to="/pubartical">发布</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>文件</span>
            </Menu.Item>
          </Menu>
         
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

             <Route exact path="/" component={Home} />
             <Route path="/login" component={Login} />
             <Route path="/list" component={L} />
             <Route path="/post/:id" component={Post} />
             <Route path="/pubartical" component={Pub} />
            {/* <Pub/>  */}

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ITC</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

// ReactDom.render(<SiderDemo />, document.getElementById('layoutroot'));
// ReactDom.render(<SiderDemo />, document.getElementById('root'));