const defaultState = {
    clear : false
}
console.log(defaultState)
export const displayHashedTodo = (state = defaultState,action) =>{
    switch(action.type){
        case 'HASHED_TODO':
            let newName = {...state,name:action.payload,clear:true}
            return {...state,...newName}
        case 'CLEAR_ALL':
            let clearAll = {...state,clear:false}  
            return clearAll 
        default:
            return state
           }
        
      
}