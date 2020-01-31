import React, { Component } from 'react'
import ComponentC from './ComponentC'

class ComponentB extends Component{

    constructor(props){
        super(props)
        this.state={
            Mystate:'Odisha',
         c_name:this.props.C_Name
    }
}
    render(){
        return (
            <div>
            <h1>My Country is {this.props.C_Name}</h1>
            <ComponentC SName={this.state.Mystate} Cname={this.state.c_name}/>
            </div>
        )
    }
}
export default ComponentB;