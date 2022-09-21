const initialState = [
    { name: "Avengers", price: "3k" },
]

export const movies =  (state = initialState, action) => {
     switch(action.type) {
         case "addMovie":
               return [ ...state, { name: action.name, price: action.price } ]
         case "deleteMovie":
             const index = state.findIndex(item => item.id ===  )
        default:
            return state
     }
}