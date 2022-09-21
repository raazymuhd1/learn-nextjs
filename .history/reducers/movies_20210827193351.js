const initialState = [
    { id: 1, name: "Avengers", price: "3k" },
]

export const movies =  (state = initialState, action) => {
     switch(action.type) {
         case "addMovie":
               return [ ...state, { name: action.name, price: action.price } ]
        default:
            return state
     }
}