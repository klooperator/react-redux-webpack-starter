import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {aLogOut,aAdminPage} from '../../globals/global-actions'
import Boxes from '../Widgets/Boxes'

function mapDispatchToProps(dispatch){
    return {
        logout: () => {
            dispatch(aLogOut());
        },
        adminDispatch: () => {
            dispatch(aAdminPage());
        }
  }
}
 class Main extends React.Component{

     constructor(props){
         super(props);
         this.onClick = this.onClick.bind(this);
         this.goToAdmin = this.goToAdmin.bind(this);
     }

    onClick(){
        this.props.logout();
    }

    goToAdmin(){
        this.props.adminDispatch();
    }

    render(){
        let self = this;
        /*console.log(self);*/
        return(
            <div>
                <div>
                    <button onClick={self.goToAdmin}>Admin panel</button>
                </div>
                <div>
                    <Boxes />
                    <button onClick={self.onClick}>logout</button>
                </div>
            </div>
        );
    }
}export default connect(null,mapDispatchToProps)(Main)