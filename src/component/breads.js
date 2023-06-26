import React from 'react';
import UserContext from '../service/usercontext';
import {Breadcrumb} from 'antd';

import 'antd/lib/breadcrumb/style';


const Breads = () => {
    return (
      //
      <UserContext.Consumer>
        {(value) => {
          // console.log(value)
          // {setTimeout(value.userfn('dddd')),(1000)}
          // setTimeout(() => value.userfn('dddd'), 5000 );
          // setTimeout(() => this.setState({ flag: !this.state.flag }), 5000 );

          // console.log(value.userct, 'dddddpppppppppp----------')

          return (
            <div>
              {/* 第一种使用Context方式获取的值：{JSON.stringify(value)} */}
              <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>User</Breadcrumb.Item>
               {/* <Breadcrumb.Item>{JSON.stringify(value)}</Breadcrumb.Item> */}
               <Breadcrumb.Item>{(value.userct.name)}</Breadcrumb.Item>
               {/* <Breadcrumb.Item>{(value.userchange)} fn </Breadcrumb.Item> */}
               {/* <Breadcrumb.Item>{value}</Breadcrumb.Item> */}
              </Breadcrumb>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  };
   
  export default Breads;



