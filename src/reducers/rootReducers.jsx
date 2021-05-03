const intialState = {
    userDetails : [
            { id : 1 , name : 'Alex' , Address : "Holy place of Churan" },
            { id : 2 , name : 'Wiliam' , Address : "Holy place of Raamaya" },
            { id : 3 , name : 'Lola' , Address : "Holy place of Hajasd" },
            ],
    users : []
}

const rootReducer = (state=intialState, action) =>{
   switch (action.type) {
       case 'DELETE_USER':
           let newUserDetails = state.users.filter((user) => action.id !== user.id)
           return {
               ...state,
               users : newUserDetails
           }
        case 'FETCH_USER':
            return {
                ...state,
                users : action.payload
            }
       default:
        return state;
   }
    
};

export default rootReducer;