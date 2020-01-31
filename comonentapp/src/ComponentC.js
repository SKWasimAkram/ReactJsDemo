import React, { Component } from 'react'

class ComponentC extends Component{

    constructor(props){
        super(props)
        this.state={
            city:'Pipili'
         

    }
}
render()
{
return(
    <div>
        <h1>I am from {this.props.Cname} my state is {this.props.SName} and my city is {this.state.city}</h1>
    </div>

)
}
}
export default ComponentC;