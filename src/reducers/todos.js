let todoList = []


let selectedTodos = []
console.log(selectedTodos)
export const todos = (state = selectedTodos, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            let todoCreatedAt = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())
            let newTodos = [{todoName:action.payload,todoSelected:false,todoCreated:todoCreatedAt},...state]
            todoList = newTodos
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
            todoList = filteredList
            return filteredList

        case 'RESET_TODOS':
            state = []
            return state

        case 'FILTER_TODO':
            let Alltodos = [...state]
            let hashedTodos = Alltodos.filter((each) =>each.todoName.includes(action.payload))
            return hashedTodos
        case 'DISPLAY_ALL':
            return todoList
        default:
            return state

    }
}

