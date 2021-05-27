
let selectedTodos = []

export const todos = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TODO':
            let todoCreatedAt = new Date()
            let newTodos = [{todoName:action.payload,todoSelected:false,todoCreated:todoCreatedAt},...state]
            
            return newTodos
        case 'SELECT_TODO':
            let indexOfSelectedTodo = state.findIndex((each) => each.todoName === action.payload.todoName)
            for(let item of state){
                if(state.indexOf(item) === indexOfSelectedTodo){
                    item.todoSelected = true
                }
            }
            let unselectedTodos = state.filter((each) => each.todoSelected!==true)
            selectedTodos.unshift(action.payload)
            let filteredList = [...unselectedTodos,...selectedTodos]
            return filteredList

        case 'RESET_TODOS':
            state = []
            return state

        case 'FILTER_TODO':
            let selectedTodoObject = state.filter((each) => each.todoName === action.payload)
            return selectedTodoObject
        default:
            return state

    }
}
