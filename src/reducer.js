let initialState = {
  HighScore: {
    cups: 0,
    ml: 0
  }
};

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case "START": return {state, start: ""}
    default: return state
  }
}

export default reducer
