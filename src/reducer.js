import {SET_CUPS, ADD_QUANTITY, SET_CURRENT_COFFEE, SET_GAME_STATUS, END_GAME, START_GAME} from './actions'

let initialState = {
  HighScore: {
    cups: 0,
    ml: 0
  },
  noOfCups: 4,
  quantity: 50,
  currentQuantity:{},
  status: '',
  intervalId: 0,
};

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_CUPS:return Object.assign({}, state, {"noOfCups": action.cups})
    case ADD_QUANTITY:return Object.assign({}, state, {"quantity": action.quantity})
    case SET_CURRENT_COFFEE: return { ...state,currentQuantity: {...state.currentQuantity, [action.index]: action.quantity}}
    case END_GAME: return {...initialState, noOfCups: state.noOfCups, HighScore: {...state.HighScore, cups: action.cups, ml: action.ml}}
    case START_GAME: return {...state, intervalId: action.intervalId, currentQuantity:{} }
    default: return state
  }
}

export default reducer
