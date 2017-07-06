import React from 'react'
import Form from '../Forms/lrfForm'

import {setFormType} from '../Forms/formActions'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
const {
FORM_VALIDATION,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
SET_FORM_TYPE
} = require('../../globals/global-constants').default;

import {aLoginRequest} from '../../globals/global-actions'

function mapDispatchToProps(dispatch, props) {
  return {
    dispatchFormType: type =>{
        dispatch(setFormType(type))
    },
    dispatchLoginReguest: (username, password) => {
        dispatch(aLoginRequest(username, password))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        global: state.global.toJS(),
        form: state.form.toJS(),
    }
}
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.test = this.test.bind(this);
        //this.props.dispatchFormType(FORM_LOGIN);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    renderHeader(){
        return(
            <div>
                <h1 onClick={this.test}>This is header</h1>
            </div>
        );
    }

    renderSubHeader(){
        return(
            <div>
                <span>Login or <a href="/register">Register</a></span>
            </div>
        );
    }

    onFormSubmit(){
        /*console.log(this);*/
        this.props.dispatchLoginReguest('eee', 'aaa');
    }

    test(values){
        /*console.log(this);*/
        /*console.log(values);*/
        this.props.dispatchFormType(FORM_LOGIN);
    }

    render(){
        let self = this;
        return(
        <div>
            {self.renderHeader()}
            {self.renderSubHeader()}
            <Form 
            onChange = {self.test}
            form = {self.props.form}
            global = {self.props.global}
            onSubmit = {self.onFormSubmit}/>
        </div>
        );
    }
}export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
