/*lrf == login register forgot*/
import t from 'tcomb-form'
import React from 'react'

function mapStateToProps(state, ownProps) {
  return {
    form: state.global.form,
  }
}

export default class Form extends React.Component{

    onSubmit(event){
        console.log(this);
        event.preventDefault();
        console.log('submited');
        console.log(this.refs.form.getValue());
        this.props.onChange(event);
    }

    /*username={
      label: 'username',
      maxLength: 64,
    }

    email={
      label: 'email',
      keyboardType: 'email-address',
    }


    password={
      label: 'password',
      secureTextEntry: secureTextEntry,
    }

    passwordAgain = {
      label: 'password_again',
      secureTextEntry: secureTextEntry,
    }

    options = {
      fields: {
      }
    }*/

    getLoginForm(){

    }

    render(){
        let self = this;
        const loginStruct = t.struct({
            username: t.String,
            password: t.String
        });
        return (
            <form onSubmit={self.onSubmit.bind(self)}>
                <t.form.Form
                ref="form"
                type={loginStruct} /> 
                <div><input type="submit" value="stisni" /></div>
                
            </form>
        );
    }
} 