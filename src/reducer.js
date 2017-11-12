import {SET_CUPS, ADD_QUANTITY, SET_CURRENT_COFFEE, UPDATE_SCORE, UPDATE_HIGH_SCORE, END_GAME, START_GAME, PAUSE_GAME, RESUME_GAME} from './actions'

let initialState = {
  HighScore: {
    cups: 0,
    score: 0
  },
  score: 0,
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
    case UPDATE_SCORE: return {...state, score: action.score}
    case UPDATE_HIGH_SCORE: return {...state, HighScore:{...state.HighScore, cups:action.cups, score:action.score}}
    case END_GAME: return {...state, status:'Game Over'}
    case PAUSE_GAME: return {...state, status:'Game Paused'}
    case RESUME_GAME: return {...state, status:'Game Started', intervalId: action.intervalId}
    case START_GAME: return {...state, status:'Game Started',  score:0, intervalId: action.intervalId, currentQuantity:{} }
    default: return state
  }
}

export default reducer
