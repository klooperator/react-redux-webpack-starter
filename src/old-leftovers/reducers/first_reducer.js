import { Map , List } from "immutable"

const INIT_STATE = ()=>{
 console.log("...initialising appState...")
 return(
  Map({ data: Map({ graphData: null,
                    usdSgd: null,
                  })
  })
 )
}

const first_Reducer = (state=INIT_STATE(), action) => {
  switch(action.type){
    case "SAVE_GRAPH_DATA":
      return state.setIn(['data', 'graphData'], List(action.payload))
    case "SAVE_USD_SGD":
      return state.setIn(['data', 'usdSgd'], Map(action.payload))
    default:
      return state
  }
}

export default first_Reducer
