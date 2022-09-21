const initialState = {
      download: false,
}

export const download = (state = initialState, action) => {
    switch(action.type) {
        case "download":
             const success = action.download ? "download was successfull" : "failed"

             return success;

        default: 
            return state;
    }
}