import React from 'react'
import { connect } from 'react-redux'
import { MyFirstComponent, GraphChart } from "../components/index.js"
import { toNum } from "../utils.js"
import actions from "../actions.js"

/*CONSTANTS*/
const masAPI = "https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=10eafb90-11a2-4fbd-b7a7-ac15a42d60b6&between[end_of_month]=2016-06,2017-05&fields=usd_sgd"

class AppComponent extends React.Component {
 constructor(props){
  super(props)
 }

 componentDidMount(props){
  const { dispatch } = this.props

   fetch(masAPI)
    .then( response=>response.json() , ()=>alert("MAS API Fetch Error!")  )
    .then( json=>dispatch(actions.saveGraphData(json.result.records)) , ()=>alert("Graph Data Save Error!") )
 }

 componentDidUpdate(){
  console.log( "Root Component Updated!" );
 }

 render(){
  const { graphData } = this.props
  return(
   <div>
     <MyFirstComponent />
     <GraphChart graphData={ graphData }/>
   </div>
  )
 }
}
/***************** Converting to Component *******************/
const mapStateToProps = (stateProps , ownProps)=>{
  const rawGraphData = (stateProps.first_Reducer.getIn(['data', 'graphData']) ? stateProps.first_Reducer.getIn(['data', 'graphData']) : false )

 return{
  graphData : toNum(rawGraphData)
 }
}

const App = connect(mapStateToProps)(AppComponent)

export default App
