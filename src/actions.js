export const SET_CUPS = "SET_CUPS";
export const ADD_QUANTITY = "ADD_QUANTITY"
export const SET_CURRENT_COFFEE = "SET_CURRENNT_COFFEE"
export const SET_GAME_STATUS = "SET_GAME_STATUS"
export const END_GAME = "END_GAME"
export const START_GAME = "START_GAME"
export const UPDATE_SCORE = "UPDATE_SCORE"
export const UPDATE_HIGH_SCORE = "UPDATE_HIGH_SCORE"
export const PAUSE_GAME = "PAUSE_GAME"
export const RESUME_GAME = "RESUME_GAME"

export const setCups = (cups) => (dispatch) => {
  dispatch({type: SET_CUPS, cups})
}

export const addCoffee = (quantity) => (dispatch) => {
  dispatch({type: ADD_QUANTITY, quantity})
}

export const setCurrentCoffee = (quantity, index) => (dispatch) => {
  dispatch({type: SET_CURRENT_COFFEE, quantity, index})
}

export const setGameStatus = (status, intervalId, score, cups, currentHighScore) => (dispatch) => {
  if (status === 'gameover') dispatch({type: END_GAME}); dispatch(setHighScore(score, cups, currentHighScore))
  if (status === 'startgame') dispatch({type: START_GAME, intervalId})
  if (status === 'pausegame') dispatch({type: PAUSE_GAME})
  if (status === 'resumegame') dispatch({type: RESUME_GAME, intervalId})
}

export const updateScore = (currentScore, quantity) => (dispatch) => {
  dispatch({type: UPDATE_SCORE, score: currentScore ? currentScore + quantity: quantity })
}

export const setHighScore = (score, cups, currentHighScore) => dispatch =>{
// TODO: consider Number of cups
  if (score > currentHighScore) dispatch({type: UPDATE_HIGH_SCORE, score, cups})
}
