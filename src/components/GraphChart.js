import React from 'react'
import { Chart } from 'react-d3-core'
import { LineChart } from 'react-d3-basic'

const GraphChart = (props)=>{
 const chartData = ( props.state.getIn(['data' , 'graphData']) ? props.state.getIn(['data' , 'graphData']).toArray() : false )
 const renderChart = (props.state.getIn(['data' , 'graphData'])? true : false)

 const width = 700
 const height = 300
 const margins = {left: 100, right: 100, top: 50, bottom: 50}
 const title = "USD/SGD Chart"
 const chartSeries = [
         {
           // field: 'usd_sgd',
           // name: 'USD/SGD',
           field: 'BMI',
           name: 'BMI',
           color: "#ff7f0e",
         }
       ]
 const x = fx=>{ console.log(fx) ; return fx.index }
 const xScale = 'Month'

 return(
  <div>
   Here Lies the Graph Chart
   { renderChart &&
    <Chart
       title={title}
       width={width}
       height={height}
       margins= {margins}
       >
       <LineChart
         showXGrid= {true}
         showYGrid= {true}
         margins= {margins}
         title={title}
         data={chartData}
         width={width}
         height={height}
         chartSeries={chartSeries}
         x={x}
       />
     </Chart>
    }
  </div>
 )
}

export default GraphChart
