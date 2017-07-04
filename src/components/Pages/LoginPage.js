import React from 'react'
import Form from '../Forms/lrfForm'

import {setFormType} from '../../globals/global-actions'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import {
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} from '../../globals/global-constants'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(setFormType,dispatch),

  }
}
class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.test = this.test.bind(this);
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

    test(values){
        console.log(this);
        console.log(values);
        dispatch(this.actions.setFormType(FORM_LOGIN));
    }

    render(){
        let self = this;
        return(
        <div>
            {self.renderHeader()}
            {self.renderSubHeader()}
            <Form 
            onChange = {self.test}/>
        </div>
        );
    }
}export default connect(null, mapDispatchToProps)(LoginPage)
