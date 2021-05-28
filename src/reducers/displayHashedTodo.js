const defaultState = {
    clear : false
}

export const displayHashedTodo = (state = defaultState,action) =>{
    switch(action.type){
        case 'HASHED_TODO':
            let newName = {...state,name:action.payload,clear:true}
            return newName
        case 'CLEAR_ALL':
            let clearAll = {...state,clear:false}  
            return clearAll 
        default:
            return state
           }
        
      
}