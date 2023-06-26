import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./component/login";
import reg from './component/reg';
import { Layout, Menu, Icon, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import 'antd/lib/menu/style';
import 'antd/lib/icon/style';
import 'antd/lib/layout/style';
import Pub from './component/pub';
import L from './component/list';
import Post from './component/post';
import SiderDemo from './component/layout';






// ReactDom.render(<SiderDemo />, document.getElementById('layoutroot'));
