// import React from 'react';
// import ReactDom from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from "./component/login";
// import reg from './component/reg';
// import { Layout, Menu, Icon, LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';

// import 'antd/lib/menu/style';
// import 'antd/lib/icon/style';
// import 'antd/lib/layout/style';
// import Pub from './component/pub';
// import L from './component/list';
// import Post from './component/post';
// import SiderDemo from './component/layout';

// const { Header, Content, Footer } = Layout

// const Home = () => (
//   <div>
//     <h2>Home !!</h2>
//     <a href="/sys.html">sys  页面 </a>

//   </div>
// );

// const About = () => (
//   <div>
//     <h2>hmg  后台管理</h2>
//   </div>
// );

// class Root extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Layout>
//           <Header>
//             <Menu mode="horizontal" theme='dark'>
//               <Menu.Item key='home'>
//                <Link to="/"> <Icon type='home' />主页</Link>
//               </Menu.Item>
//               <Menu.Item key='login'>
//                  {/* <Link to="/login"><Icon type='login' />登录</Link> */}
//               </Menu.Item>
//               <Menu.Item key='list'>
//                 <Link to="/list"><Icon type="bars" />列表</Link>
//               </Menu.Item>
//               <Menu.Item key='pub'>
//                 <Link to="/pub">发布</Link>
//               </Menu.Item>
//               {/* <Menu.Item key='reg'>
//                 <Link to="/reg">注册</Link>
//               </Menu.Item> */}
//               <Menu.Item key='about'>
//                 <Link to="/about">关于</Link>
//               </Menu.Item>
//               <Menu.Item key='usernamestr'>
//                 <Link to="/usernamesrt">user</Link>
//               </Menu.Item>
//             </Menu>
//             <ul>
//               {/* <li>
//                 <Link to="/">主页</Link>
//               </li>
//               <li>
//                 <Link to="/about">关于</Link>
//               </li>
//               <li>
//                 <Link to="/login">登录</Link>
//               </li>
//               <li>
//                 <Link to="/reg">注册</Link>
//               </li> */}
//             </ul>
//           </ Header>
//           <Content style={{ padding: '8px 50px' }}>
//             <div style={{ background: '99A3A8', padding: 24, minHeight: 850 }}>
//               {/* <Route exact path="/" component={Home} /> */}
//               {/* <Route path="/login" component={Login} /> */}
//               <Route path="/reg" component={reg} />
//               {/* <Route path="/pub" component={Pub} /> */}
//               {/* <Route path="/list" component={L} /> */}
//               {/* <Route path="/post/:id" component={Post} /> */}
//               <Route path="/pub" component={SiderDemo} />
//               <Route path="/about" component={About} />
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center' }} >
//             hmglog  ©2023
//          </Footer>
//         </ Layout>
//       </Router>
//     )
//   }
// };



// ReactDom.render(<LocaleProvider locale={zhCN}>
// <Root />
// </LocaleProvider>, document.getElementById('root'));

// // ReactDom.render(<SiderDemo />, document.getElementById('layoutroot'));

// "react": "^15.5.4",


import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Login from "./component/login";
import L from './component/list';
import Post from './component/post';
import Cliaddress from './component/cliaddress';
import {Toggle} from './component/timedatepage';
import Home from './component/home';
import Timestr,  {Clientaddressstr} from './component/timestrmobx';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/lib/menu/style';
import 'antd/lib/icon/style';
import 'antd/lib/layout/style';
import 'antd/lib/breadcrumb/style';

import Pub from './component/pub';
import Sendmsg from './component/sendmsg';
import UserContext from './service/usercontext';
import Breads from './component/breads';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const Home = () => (
//   <div>
//     <h2>Home !!</h2>
//     <p >首页  页面 <Cliaddress/></p>
//   </div>
// );

// class Home extends React.Component {

//   constructor(props) {
//     super(props);
//     // console.log(this, this.props, this.props.route)

//   }
//   render() {
//     console.log(this, this.props,)
//     return (
//       <h1>
//         Index - {this.props}
//       </h1>
//     );
//   }
// }


// const Home = () => (
  
//   <div>
//     <h2>HMG !!  props </h2>
//     <Toggle />
//     <Timestr />

//     <a href="/sys.html">sys  页面 快速链接 </a>

//   </div>
// );

// function Home(props){
//   console.log(props)
//   return(
//       <div>kklflsoioioajfoajof
//       </div>)
// };
// https://designrevision.com/demo/shards-dashboard-lite-react/blog-overview?

class SiderDemo extends React.Component {
  constructor(props){
    super(props);
    // const user = {
    //   name: 'John',
    //   email: 'john@example.com',
    //   role: 'admin'
    //   };

      // const [store, setStore] = useState(user);

    // this.state = {
    //   user: {
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     },
    //   };
  }

  // state = {
  //   user: {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com.cn',
  //     },
  //   };
  // userchange: this.userChange.bind(this),
  // email: 'john.doe@example.com.cn',


  state = {
    collapsed: false,
    user: {
      name: '',
      userchange: this.userChange.bind(this),     
    },
  };

  userChange(aa) {
    console.log('in father')
    console.log(this, this.state);
    // const {user} =  this.state
    this.setState({
        // user:{ name: aa}
        user:{...this.state.user, name: aa}
    })
    console.log(aa)

  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };



  render() {
    // const user = {
    //   name: 'John',
    //   email: 'john@example.com',
    //   role: 'admin'
    //   };
      // const [ contextValue , setContextValue ] = React.useState({  name: 'johnme',color:'#ccc', background:'pink' });
      console.log(this,Login.props,Login.usemail, Login.clientip,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
      console.log(this.state.user)
      return (
      // <UserContext.Provider value={{name:'skw'}}>
      // <UserContext.Provider value={{userct:this.state.user,userfn:this.state.userchange}}>
      <UserContext.Provider value={{userct:this.state.user}}>
      <Router>
      <Layout   style={{ minHeight: '100vh' }}>
        <Sider  collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              {/* <Icon type="pie-chart" /> */}
              <Link to="/home" ><Icon type="pie-chart" />首页</Link>

              {/* <span>首页</span> */}
            </Menu.Item>
            <Menu.Item key="2">
              {/* <Icon type="desktop" />
              <span>系统</span> */}
              <Link to="/login"><Icon type='login' />登录</Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>文章</span>
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
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>系统</span>
                </span>
              }
            >
              <Menu.Item key="3">
              <Link to="/sendmsg">消息推送</Link>

              </Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>文件</span>
            </Menu.Item>
          </Menu>
         
        </Sider>
        <Layout>
          
          <Header style={{ background: '#fff', padding: 0 }} > >>ITC</Header>
          
          <Content style={{ margin: '0 16px' }}>
                <Breads/>
            {/* // <Breadcrumb style={{ margin: '16px 0' }}>
            //   <Breadcrumb.Item>User</Breadcrumb.Item>
            //   <Breadcrumb.Item>HMG</Breadcrumb.Item>
            // </Breadcrumb> */}

            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             <Route exact path="/" component={Home} />
             <Route path="/home"  component={Home} />
             {/* <Route path="/home" element={<Home props={'helloWorld from Props'} />} /> */}
             <Route path="/login" component={Login} />
             <Route path="/list" component={L} />
             <Route path="/post/:id" component={Post} />
             <Route path="/pubartical" component={Pub} />
             <Route path="/cliaddress" component={Cliaddress} />
             <Route path="/sendmsg" component={Sendmsg} />
            {/* <Pub/>  */}
            </div>

          </Content>

          <Footer style={{ textAlign: 'center' }}>ITC</Footer>

        </Layout>
      </Layout>
      </Router>
      </UserContext.Provider>
    );
  }
}

// ReactDom.render(<SiderDemo />, document.getElementById('layoutroot'));
ReactDom.render(<SiderDemo />, document.getElementById('root'));