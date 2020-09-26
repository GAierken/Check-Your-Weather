const initialState = {
    weathers: [],
    singleWeather: {}
}

const weatherReducer = (state = initialState, action) => {
        switch(action.type){
           case 'SET_WEATHERS':
               return{
                   ...state,
                   weathers: action.weathers
               }
            default:
                return state
        }
}


export default weatherReducer