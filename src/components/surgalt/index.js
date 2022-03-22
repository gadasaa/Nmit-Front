import React, { Component } from "react";
import './index.css'
import { Sheader } from "./sheader"; 
import { Sidebar } from "./side_bar";

export class Surgalt extends Component {
    constructor(){
            super();
    }
    render(){
        return <div>
            <Sidebar/>
            <Sheader/>
        </div>
    }
    
}