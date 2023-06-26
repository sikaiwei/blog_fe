import React from 'react';
import {Toggle} from './timedatepage';
import Timestr,  {Clientaddressstr} from './timestrmobx';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      console.log(this, props, 'mmmmmmmmmmmmmmmmmmmmmmm')
  
    }

    state = {
        clientip: '0.0.0.0'
    }

    ipChange(aa) {
        console.log('in home', aa, this.state.clientip)

        this.setState({
            clientip: aa
        })
        console.log('in home', aa, this.state.clientip)
        console.log(aa, this.state.clientip)

    }

    render() {
      console.log(this, this.props, '首页 首页 首页 首页 首页 首页 首页 首页')
      return (
        // <a>{this.state.clientip}</a>
          <div>
        <h1>
          Index - 登录IP: {this.state.clientip} 
        </h1>
             <Toggle clientip={this.state.clientip} 
                onipChange={this.ipChange.bind(this)} />
             <Timestr />
    </div>
      );
    }
  };

//   export {Home};


