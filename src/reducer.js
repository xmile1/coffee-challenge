import {SET_CUPS} from './actions'
let initialState = {
  HighScore: {
    cups: 0,
    ml: 0
  },
  noOfCups: 4,
};

const reducer = (state=initialState, action)=>{
  switch("SET_CUPS"){
    case "SET_CUPS":return Object.assign({}, state, {"noOfCups": action.cups})
    default: return state
  }
}

export default reducer
