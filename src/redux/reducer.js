const initialState = {
    weathers: [],
    activeItem: 'New York',
    modalStatus: false,
    clickedDay: {}
}

const weatherReducer = (state = initialState, action) => {
    
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
           case "RECEIVE_MODAL_DATA":
               return {
                   ...state,
                   modalStatus: action.data.status,
                   clickedDay: action.data.day
               }
            default:
                return state
        }

     
}


export default weatherReducer