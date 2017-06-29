import React from 'react'
import { connect } from 'react-redux'
import { MyFirstComponent } from "../components/index.js"

class AppComponent extends React.Component {
 constructor(props){
  super(props)
 }

 componentDidMount(){
  console.log("Root component mounted! Props :::" , this.props);
 }

 render(){
  return(
   <div>
     <MyFirstComponent />
   </div>
  )
 }
}
/***************** Converting to Component *******************/
const mapStateToProps = (stateProps , ownProps)=>{
 return{
  stateProps
 }
}

const App = connect(mapStateToProps)(AppComponent)

export default App
