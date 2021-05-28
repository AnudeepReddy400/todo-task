import {connect} from 'react-redux'
import{displayALLTODO,clearTodo} from '../../actions'
import './index.css'

const SelectedHashWord = (props) =>{
    const {displayHashedTodo} = props
    const getAllTodos = () =>{
        props.dispatch(displayALLTODO())
        props.dispatch(clearTodo())
    }
    if(displayHashedTodo.clear){
    return(
        <div className = "hashed-todo-container">
            <p>Filter:</p>
        <div className = "hashedTodoNameContainer">
            <p className = "hashedTodoName">{displayHashedTodo.name}</p>
            <button type = "button" className = "display-all-todos" onClick = {getAllTodos}>X</button>
        </div>
        </div>
    )
    }else{
        return<div></div>
    }
}

const mapStateToProps = state =>{
    return{
        displayHashedTodo : state.displayHashedTodo
    }
}

export default connect(mapStateToProps)(SelectedHashWord)