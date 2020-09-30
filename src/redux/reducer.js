const initialState = {
    weathers: [],
    //default New York
    activeItem: 'New York',
    //modal trigger
    modalStatus: false,
    // pass down for Modal
    clickedDay: {}
}

const weatherReducer = (state = initialState, action) => {
    
        switch(action.type){
            // pass down api lat, lng
           case "RECEIVE_API_DATA":
               return{
                   ...state,
                   weathers: action.data
               }
            // pass down selected city data
           case "RECEIVE_ACTIVEITEM_DATA":
               return{
                   ...state,
                   activeItem: action.data.name
               }
            // modal trigger
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