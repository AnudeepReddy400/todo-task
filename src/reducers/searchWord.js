export const searchWord = (state = "",action)=>{
    switch(action.type){
        case 'TODO_WORD':
            return action.payload
        case 'CLEAR_SUGGESTIONS':
            state = ""
            return state
        default:
            return state
    }
}

