export const toNum = (graphData)=>{
  if(graphData){
   return graphData.map( fx=>{
    return { usd_sgd: parseFloat(fx.usd_sgd), end_of_month: fx.end_of_month }
   } )
  }
}
