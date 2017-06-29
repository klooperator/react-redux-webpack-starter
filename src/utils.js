export const toNum = (graphData)=>{
  if(graphData){
   console.log(graphData.toArray());
   return graphData.map( fx=>{
    return { usd_sgd: parseFloat(fx.usd_sgd) }
   } )
  }
}
