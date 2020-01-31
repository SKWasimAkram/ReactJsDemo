import React,{Component} from "react"
import ComponentB from './ComponentB '


import { render } from "@testing-library/react"


class ComponentA extends Component{
    constructor(props){
        super(props)
    this.state={
        Country:'India'
    }
    }
    render(){
        return(
        <div>
            <ComponentB C_Name={this.state.Country}/>
        </div>
        )
    }

}
 export default ComponentA;