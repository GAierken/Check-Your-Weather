const initialState = {
    weathers: [],
    activeItem: 'New York'
    // activeItem: 'New York'
}

const weatherReducer = (state = initialState, action) => {
       console.log()
        switch(action.type){
           case "RECEIVE_API_DATA":
               return{
                   ...state,
                   weathers: action.data
               }
           case "RECEIVE_ACTIVEITEM_DATA":
               return{
                   ...state,
                   activeItem: action.data.name
               }
            default:
                return state
        }

     
}


export default weatherReducer