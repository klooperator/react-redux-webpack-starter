import React from 'react'
import { connect } from 'react-redux'
import {aLoggedInWithData} from '../../globals/global-actions'

function mapDispatchToProps(dispatch){
    return {
        toUserDashboard: () => {
            dispatch(aLoggedInWithData());
        }
  }
}
 class AdminPage extends React.Component{

     constructor(props){
         super(props);
         this.backToUserDashboard = this.backToUserDashboard.bind(this);
     }

     backToUserDashboard(){
        this.props.toUserDashboard();
     }

    render(){
        let self = this;
        /*console.log(self);*/
        return(
            <div>
               <h2>This is admin page</h2>
               <span onClick={self.backToUserDashboard}>trust me</span>
            </div>
        );
    }
}export default connect(null,mapDispatchToProps)(AdminPage)