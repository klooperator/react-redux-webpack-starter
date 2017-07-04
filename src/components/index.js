import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'




import Main from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'


/*import {setFormType} from '../globals/global-actions'
import { bindActionCreators } from 'redux'
import {
FORM_LOGIN,
FORM_FORGOT,
FORM_REGISTER,
} from '../globals/global-constants'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(setFormType,dispatch),

  }
}*/

function mapStateToProps(state, ownProps) {
  return {
    globalState: state.global,

  }
}

class App extends React.Component{

    getCurrentRoute(){
        console.log(this.props.globalState.currentUser)
        if(!this.props.globalState.currentUser)
        return (
            <LoginPage />
        );
    }

    render(){
        let self = this;
        console.log(self);
        return(
            <Router history={self.props.history}>
                {self .getCurrentRoute()}
            </Router>
        );
    }
}export default connect(mapStateToProps)(App)