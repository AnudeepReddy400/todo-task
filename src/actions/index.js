export const addTodo = (todoAdded) =>{
    return{
        type : "ADD_TODO",
        payload : todoAdded
   }
}

export const selectTodo = (todoSelected) =>{
    return{
        type:"SELECT_TODO",
        payload : todoSelected
    }
}

export const resetTodos = () =>{
    return{
        type: "RESET_TODOS"
    }
}

export const todoWord = (word) =>{
    return{
        type:"TODO_WORD",
        payload:word
    }
}

export const filterTodo = (word) =>{
    return{
        type:"FILTER_TODO",
        payload : word
    }
}

export const hashedTodo = (word) =>{
    return{
        type : "HASHED_TODO",
        payload : word
    }
}

export const displayALLTODO = ()=>{
    return{
        type : "DISPLAY_ALL"
    }
}

export const clearTodo = ()=>{
    return{
        type:"CLEAR_ALL"
    }
}