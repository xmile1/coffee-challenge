import {SET_CUPS, ADD_QUANTITY, SET_CURRENT_COFFEE} from './actions'

let initialState = {
  HighScore: {
    cups: 0,
    ml: 0
  },
  noOfCups: 4,
  quantity: 50,
  currentQuantity:{}
};

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_CUPS:return Object.assign({}, state, {"noOfCups": action.cups})
    case ADD_QUANTITY:return Object.assign({}, state, {"quantity": action.quantity})
    case SET_CURRENT_COFFEE: return { ...state,currentQuantity: {...state.currentQuantity, [action.index]: 10}}
    default: return state
  }
}

export default reducer
