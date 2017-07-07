import React from 'react'
import { connect } from 'react-redux'
import {/*BrowserRouter as */Router,Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'
import {aLoginCheck} from '../globals/global-actions'



import Main from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import LoadingPage from './Utils/LoadingPage'
import Adminpage from './Pages/AdminPage'


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
    route: state.global.get('ruote'),

  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    checkLogin: (username, password) => {
        dispatch(aLoginCheck());
    }
  }
}

class App extends React.Component{

    getCurrentRoute(){
        switch(this.props.route){
            case '/':
                return <Main />;
            case '/login':
                return <LoginPage />;
            case '/admin':
                return <Adminpage />
            case null:
                this.props.checkLogin();
                return <LoadingPage />;
            default:
                /*console.log('IM CALLING THIS SHEAT!!!!');
                console.log(this)*/
                
        }
        /*return <LoginPage />;*/
    }

    

    render(){
        let self = this;
        /*console.log(self);*/
        /*this.props.history.push({pathname:'/login'});
        this.props.history.goForward();*/
        return(
            <Router history={self.props.history}>
                {self .getCurrentRoute()}
                
            </Router>
        );
    }
}export default connect(mapStateToProps, mapDispatchToProps)(App)

/*<Switch>
                    <Route 
                        path = '/'
                        render ={(props, location) => {console.log('nekakva rute'); console.log(props); console.log(location); return (<span>this is sparta</span>)} } />
                    <Route path="/login" component={LoginPage}/>
                
                </Switch>*/