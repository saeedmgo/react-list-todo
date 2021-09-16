import React,{Component} from "react"
import Logo from "../../logo.svg"




class LogoClass extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className="col-2 col-lg-1 pl-0">
               <img src={Logo} alt=""/>
            </div>
        )
    }
}

export default LogoClass