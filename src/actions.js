export const SET_CUPS = "SET_CUPS";
export const ADD_QUANTITY = "ADD_QUANTITY"
export const SET_CURRENT_COFFEE = "SET_CURRENNT_COFFEE"

export const setCups = (cups) => (dispatch) => {
  dispatch({type: SET_CUPS, cups})
}

export const addCoffee = (quantity) => (dispatch) => {
  dispatch({type: ADD_QUANTITY, quantity})
}

export const setCurrentCoffee = (quantity, index) => (dispatch) => {
  dispatch({type: SET_CURRENT_COFFEE, quantity, index})
}
