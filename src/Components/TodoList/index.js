import {connect} from 'react-redux'
import{selectTodo} from '../../actions'
import {useState} from 'react'

const TodoList = (props) =>{
    
    let green = "green-bg"
    let white = "white-bg"

    const [activeIndex,setActiveIndex] = useState(white);

    const onTitleClick = (bgColor) =>{
        setActiveIndex(bgColor)
    }

    const todoSelected = each =>{
        props.selectTodo(each)
        
    }

    const {todos} = props

    return todos.map((each,index) =>{
        let highlightedText = each.todoName[0] === '#' ? "highlight-text" : ""
        let selctedTodo = each.todoSelected ? "selectedTodo" : ""
        let todoStatus = each.todoSelected? "Completed" : "Active"
        return(
            <li className = {`todo-item-container ${activeIndex}`} onClick ={() => todoSelected(each)} key = {index} >
            <div className = {`label-container ${selctedTodo}`} >
                <h1 className = {`checkbox-label ${highlightedText}`}>{each.todoName}</h1>
                <p>{todoStatus}</p>
            </div>
        </li>
        )
    })
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        todos : state.todos,
    }
}

export default connect(mapStateToProps,{selectTodo})(TodoList)