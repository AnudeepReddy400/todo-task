export const searchWord = (state = "",action)=>{
    switch(action.type){
        case 'TODO_WORD':
            return action.payload
        default:
            return state
    }
}

