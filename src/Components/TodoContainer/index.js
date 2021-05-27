import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import {connect} from 'react-redux'
import {resetTodos} from '../../actions'

const TodoContainer = (props) =>{
    const todoListReset = () =>{
        props.dispatch(resetTodos()) 
    }
    return(
    <div className="todos-bg-container">
        <div className="content-Container">
              <h1 className="todos-heading">Todos</h1>
              <div className = "heading-container">
              <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
              </h1>
              <button type = "button" className = "reset-button" onClick ={todoListReset}>Reset</button>
              </div>
              <AddTodo />
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer">
                <TodoList/>
              </ul>
        </div>
      </div>
  )
}
  
  export default connect()(TodoContainer);
  