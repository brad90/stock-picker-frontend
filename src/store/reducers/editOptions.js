const initialState = {
  textObjects: []
}


const editOptionsReducer = (state = initialState, action) => {
 switch (action.type) {
   case 'ADD_TEXT': return {
     ...state,
     textObjects: [...state.textObjects, action.payload]
  }
  default:
   return state
  }
}

export default editOptionsReducer