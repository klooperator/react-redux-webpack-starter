import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'


export default class LoadingPage extends React.Component{

    render(){
        let self = this;
        /*console.log(self);*/
        return(
            <div>
                <h1>loading</h1>
            </div>
        );
    }
}