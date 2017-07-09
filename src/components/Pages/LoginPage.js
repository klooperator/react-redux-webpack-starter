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
        globalForm: state.global.get('form'),
        form: state.form.toJS(),
    }
}
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.test = this.test.bind(this);
        //this.props.dispatchFormType(FORM_LOGIN);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.changeFormType = this.changeFormType.bind(this);
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
                <span><a onClick={()=>{this.changeFormType(FORM_LOGIN)}}>Login</a> or <a onClick={()=>{this.changeFormType(FORM_REGISTER)}}>Register</a></span>
            </div>
        );
    }

    onFormSubmit(){
        /*console.log(this);*/
        this.props.dispatchLoginReguest('eee', 'aaa');
    }

    changeFormType(formType){
        console.log("WHYYYYYY????");
        this.props.dispatchFormType(formType);
    }

    test(values){
        /*console.log(this);*/
        /*console.log(values);*/
        /*this.props.dispatchFormType(FORM_LOGIN);*/
    }

    render(){
        console.log(this);
        let self = this;
        return(
        <div>
            {self.renderHeader()}
            {self.renderSubHeader()}
            <Form 
            onChange = {self.test}
            form = {self.props.form}
            global = {self.props.globalForm}
            onSubmit = {self.onFormSubmit}/>
        </div>
        );
    }
}export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
