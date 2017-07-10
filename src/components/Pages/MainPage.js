import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {aLogOut,aAdminPage} from '../../globals/global-actions'
import Boxes from '../Widgets/Boxes'
import Wallet from '../Widgets/Wallet'
import WidgetLoader from '../Widgets/DeviceWidgets/WidgetLoader'

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
            <div style={{display:'inline-block'}}>
                <div style={{float:'left'}}>
                    <button onClick={self.goToAdmin}>Admin panel</button>
                    <button onClick={self.onClick}>logout</button>
                </div>
                <div style={{float:'left'}}>
                    <Boxes />
                </div>
                <div style={{float:'left'}}>
                    <Wallet />
                </div>
                <div>
                    <WidgetLoader />
                </div>
            </div>
        );
    }
}export default connect(null,mapDispatchToProps)(Main)