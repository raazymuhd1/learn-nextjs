const initialState = [
    { name: "Avengers", price: "3k" },
]

export const movies =  (state = initialState, action) => {
     switch(action.type) {
         case "displayMovie":
               return state
        default:
            return state
     }
}