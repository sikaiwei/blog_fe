import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class Father extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         Value1: 'dd',
           
    //     }
    // }
    // @observable Value1 = this.state.Value1;

    state = {
                Value1: 'dd',
            }

    value1Change(aa) {
        console.log('in father')

        this.setState({
            Value1: aa
        })
        console.log(aa)

    }
    value2Change(bb) {
        console.log('fafafafafafafafafafafa')
        this.setState({
            Value1: bb
        })
    }
    render() {
        
        return (
            <div style={{ padding: "100px" }}>
                <Child1 value1={this.state.Value1} 
                onvalue1Change={this.value1Change.bind(this)} />
                <Child2 value1={this.state.Value1} 
                 onvalue2Change={this.value2Change.bind(this)} /> 
            </div>
        )
    }
}

// @observer
class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }
    change1Value(e) {
        console.log('in child 1')

        this.props.onvalue1Change(e.target.value)
        console.log(this.props)

    }
  
    render() {
        return (
            <div>
            <input value={this.props.value1 + 11} />
            <input  onChange={this.change1Value.bind(this)} />
            <Child3 value1={this.props.value1} />
            </div>
        )
    }
}

// @observer
class Child2 extends React.Component {
    constructor(props) {
        super(props)
        const valueChange = this.props.onvalue2Change
        console.log(this,this.props,'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
        // this.value2Change.bind(this)
    }
    change2Value(e) {
        console.log('in child 1')
        console.log(e.target,'tttttttttttttt', this, e.target.value,);
        // this.onvalue2Change( e.target.value)
        let vl = e.target.value
        this.props.onvalue2Change(e.target.value)
        // vl => {
        //     console.log(valueChange, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        //     console.log(this, '>>>>>>>>>>>>>>>>>>>>>>>>')
        //     this.valueChange(vl)
        // };
        // console.log(this.props)

    };
    render() {
        // const con =  this.props.value1
        return (
            <div>
            <input value={this.props.value1 + 22} />
            <Child4 onvalue2Change={this.change2Value.bind(this)} />
            </div>
        )
    }
}

class Child4 extends React.Component {
    constructor(props) {
        super(props)
        // const change1Value = this.props.onvalue2Change
    }
    change1Value(e) {
        console.log('in child 4')

        this.props.onvalue2Change(e)
        // this.onvalue2Change(e.target.value)
        console.log(this.props)

    }
  
    render() {
        console.log(this.props, '4444444444444444444')
        return (
            <div>
          
            {/* <input  onChange={this.change1Value.bind(this)} /> */}
            {/* <input  onChange={this.props.onvalue2Change.bind(this)} /> */}
            <input  onChange={this.props.onvalue2Change} />
            {/* <input  onChange={ this.change1Value} /> */}
       
            </div>
        )
    }
}

class Child3 extends React.Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        // const con =  this.props.value1
        return (
            <div>
            <input value={this.props.value1 + 33} />
            </div>
        )
    }
}




export  {Father, Child1, Child2, Child3, Child4 };

// ReactDOM.render(
//     <Father />,
//     document.getElementById('root')
// )