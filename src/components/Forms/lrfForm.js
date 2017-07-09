/*lrf == login register forgot*/
import t from 'tcomb-form'
import React from 'react'
const {
FORM_VALIDATION,
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
SET_FORM_TYPE
} = require('../../globals/global-constants').default;

import I18n from 'i18n-js'

function mapStateToProps(state, ownProps) {
  return {
    form: state.global.form,
  }
}

export default class Form extends React.Component{

  constructor(props){
    super(props);
    this.getLoginForm = this.getLoginForm.bind(this);
  }

    onSubmit(event){
        /*console.log(this);*/
        event.preventDefault();
        /*console.log('submited');*/
        /*console.log(this.refs.form.getValue());*/
        this.props.onSubmit(event);
    }

    /**/

    getLoginForm(){
      /*console.log(this);
      console.log(this.props.form);*/
      let options = {
        fields: {
          username: {
            label: I18n.t('LoginForm.username',{default: [{message:'username'}]}),
            maxLength: 64,
            placeholder: 'username',
            autoCapitalize: 'none',
            autoCorrect: false,
            editable: (this.props.global !== undefined && this.props.global !== null) ? !this.props.global.isFetching : true,
            hasError: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.usernameHasError : false,
            error: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.usernameErrorMsg : 'you have error',

          },
          password: {
            label: I18n.t('LoginForm.password'),
            type: 'password', /*TODO NATIVE: secureTextEntry*/ /*TODO toggable*/
            placeholder: 'password',
            editable: (this.props.global !== undefined && this.props.global !== null) ? !this.props.global.isFetching : true,
            hasError: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.passwordHasError : false,
            error: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.passwordHasError : 'you have error',
          },
          passwordAgain:{
            label: I18n.t('LoginForm.password_again'),
            type: 'password', /*TODO NATIVE: secureTextEntry*/ /*TODO toggable*/
            placeholder: 'password',
            editable: (this.props.global !== undefined && this.props.global !== null) ? !this.props.global.isFetching : true,
            hasError: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.passwordAgainHasError : false,
            error: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.passwordAgainHasError : 'you have error',
          },
          email:{
            label: I18n.t('LoginForm.email'),
            maxLength: 64,
            editable: (this.props.global !== undefined && this.props.global !== null) ? !this.props.global.isFetching : true,
            hasError: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.emailHasError : false,
            error: (this.props.form.fields !== undefined && this.props.form.fields !== null) ? this.props.form.fields.emailHasError : 'you have error',
          }
        }
      }

      let loginStruct;
      switch(this.props.form.type){
        case FORM_LOGIN:
          loginStruct = t.struct({
              username: t.String,
              password: t.String
          });
          break;
        case FORM_REGISTER:
          loginStruct = t.struct({
            username: t.String,
            email: t.String,
            password: t.String,
            passwordAgain: t.String
          });
          break;
        case FORM_FORGOT:
          loginStruct = t.struct({
            email: t.String
          });
          break;
        default:
          loginStruct = t.struct({
              username: t.String,
              password: t.String
          });
          break;
    }

    /*console.log(options)*/
     return (
              <t.form.Form
                ref="form"
                type={loginStruct}
                options = {options} /> 
     );
    }

    render(){
      console.log(this);
        let self = this;
        
        return (
            <form onSubmit={self.onSubmit.bind(self)}>
                {self.getLoginForm()}
                <div><input type="submit" value="stisni" /></div>        
            </form>
        );
    }
} 
