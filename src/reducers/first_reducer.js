import { Map , List } from "immutable"

const INIT_STATE = Map({
 data: Map({ "graphData": null })
})

const first_Reducer = (state=INIT_STATE, action) => {
  switch(action.type){
    case "SAVE_GRAPH_DATA":
      return state.setIn(['data', 'graphData'], List(action.payload))
    default:
      return state
  }
}

export default first_Reducer
