import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import UsdSgdTicker from "../UsdSgd/UsdSgd.js"
import "./GraphChart.css"

const GraphChart = (props)=>{
 const { graphData , usdSgd} = props

 const renderChart = (graphData)=>{
  if(graphData){
    const data = graphData.toArray()
    return <LineChart width={600} height={300}  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
              <Line type="monotone" dataKey="usd_sgd" stroke="red" />
              <XAxis dataKey="end_of_month"/>
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
           </LineChart>
  }
 }
 const renderSpinner =  ()=>{
  return(
   <svg width='150px' height='150px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ripple">

     <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>

     <g>
      <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
       <circle cx="50" cy="50" r="40" stroke="#afafb7" fill="none" strokeWidth="6" strokeLinecap="round">
         <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
       </circle>
     </g>

     <g>
      <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
       <circle cx="50" cy="50" r="40" stroke="#5cffd6" fill="none" strokeWidth="6" strokeLinecap="round">
          <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
       </circle>
     </g>

   </svg>
  )
 }

 return(
  <div className="graph-block">
   <UsdSgdTicker usdSgd={usdSgd}/>
   <div className="graph-Container">
    { graphData ? renderChart(graphData) :  renderSpinner() }
   </div>
  </div>
 )
}

export default GraphChart
