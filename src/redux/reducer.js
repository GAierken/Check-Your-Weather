const initialState = {
    weathers: []
}

const weatherReducer = (state = initialState, action) => {
       
        switch(action.type){
           case "RECEIVE_API_DATA":
               return{
                   ...state,
                   weathers: action.data
               }
            default:
                return state
        }
}


export default weatherReducer