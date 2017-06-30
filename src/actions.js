const saveGraphData = (data)=>{
  return {
   type: "SAVE_GRAPH_DATA",
   payload: data
  }
}
const saveUsdSgd = (data)=>{
  return {
   type: "SAVE_USD_SGD",
   payload: data
  }
}

export default {
 saveGraphData,
 saveUsdSgd
}
