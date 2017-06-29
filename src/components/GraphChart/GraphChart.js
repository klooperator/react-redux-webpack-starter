import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import "./GraphChart.css"

const GraphChart = (props)=>{
 const { graphData } = props

 const renderChart = (graphData)=>{
  if(graphData){
    const data = graphData.toArray()
    // console.log(data);
    return <LineChart width={600} height={300}  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
             <Line type="monotone" dataKey="usd_sgd" stroke="black" />
              <XAxis />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           </LineChart>
  }
 }

 return(
  <div className="graph-Container">
   {
    renderChart(graphData)
   }
  </div>
 )
}

export default GraphChart
