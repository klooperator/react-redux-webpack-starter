import React from 'react'
import { connect } from 'react-redux'
import { MyFirstComponent, GraphChart } from "../components/index.js"
import { toNum } from "../utils.js"
import actions from "../actions.js"
/*import { forgeAPI_Key } from "../../apiKeys.js"*/

/*CONSTANTS*/
/*const masAPI = "https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=10eafb90-11a2-4fbd-b7a7-ac15a42d60b6&between[end_of_month]=2016-06,2017-05&fields=end_of_month,usd_sgd"

const forgeAPI = "https://forex.1forge.com/1.0.2/quotes?pairs=USDSGD&api_key="+forgeAPI_Key*/

class AppComponent extends React.Component {
 constructor(props){
  super(props)
  /*this.fetchForge = this.fetchForge.bind(this)*/
 }

 /*fetchForge(dispatch){
   return (()=>{
     fetch(forgeAPI)
      .then( response=>response.json() , ()=>alert("Forge API Fetch Error!")  )
      .then( json=>dispatch(actions.saveUsdSgd(json[0])) , ()=>alert("Forge Data Save Error!") )
    })()
 }*/

 componentDidMount(props){
  console.log("<App> Mounted");
  const { dispatch } = this.props

   fetch(masAPI)
    .then( response=>response.json() , ()=>alert("MAS API Fetch Error!")  )
    .then( json=>{
     dispatch(actions.saveGraphData(json.result.records))
    } , ()=>alert("Graph Data Save Error!") )

   fetch(forgeAPI)
    .then( response=>response.json() , ()=>alert("Forge API Fetch Error!")  )
    .then( json=>{
     dispatch(actions.saveUsdSgd(json[0]))
    } , ()=>alert("Forge Data Save Error!") )
 }

 componentDidUpdate(props){
   console.log( "<App> Component Updated!" );

   /*setTimeout( ()=>this.fetchForge(props.dispatch) , 10000 )*/
 }

 componentWillUnmount(){
  console.warn("Component Unmounted");
 }

 render(){
  const { graphData , usdSgd } = this.props
  return(
   <div>
     hello
   </div>
  )
 }
}
/***************** Converting to Component *******************/
const mapStateToProps = (stateProps , ownProps)=>{
  const rawGraphData = (stateProps.first_Reducer.getIn(['data', 'graphData']) ? stateProps.first_Reducer.getIn(['data', 'graphData']) : false )
  const usdSgd = (stateProps.first_Reducer.getIn(['data', 'usdSgd']) ? stateProps.first_Reducer.getIn(['data', 'usdSgd']) : false)

  return{
   graphData : toNum(rawGraphData),
   usdSgd
  }
}

const App = connect(mapStateToProps)(AppComponent)

export default App
