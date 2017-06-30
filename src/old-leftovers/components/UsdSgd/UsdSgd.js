import React from 'react'
import './UsdSgd.css'

const UsdSgdTicker = (props)=>{
 const { usdSgd } = props
 const timeStamp = (usdSgd ? Date() : "")

 return(
  <div>
   <div className="ticker">
    <div className="fx-rate">USD\SGD = { (usdSgd ? usdSgd.get('price') : "") }</div>
    <span className="timestamp">Updated on: { timeStamp }  </span>
   </div>
  </div>
 )
}

export default UsdSgdTicker
