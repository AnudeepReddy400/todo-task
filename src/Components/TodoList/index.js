import {connect} from 'react-redux'
import{selectTodo,filterTodo,hashedTodo} from '../../actions'
import {useState} from 'react'

const TodoList = (props) =>{
    
    //const [todoBgColor,selectTodoBgColor] = useState("white-bg")
    //const onPointed = (value) =>{
    //    selectTodoBgColor(value)
    //}
    //onMouseOver = {()=>onPointed("green-bg")} onMouseOut = {()=>onPointed("white-bg")}
    //${todoBgColor}
    
    const todoSelected = each =>{
        props.selectTodo(each)
        
    }

    const selectedHashedWord = value =>{
        if(value[0] === "#"){
            props.filterTodo(value)
            props.hashedTodo(value)
        }
    }

    const {todos} = props

    return todos.map((each,index) =>{
        let highlightedText = each.todoName[0] === '#' ? "highlight-text" : ""
        let selctedTodo = each.todoSelected ? "selectedTodo" : ""
        let todoStatus = each.todoSelected? "Completed" : "Active"
        return(
            <li className = {`todo-item-container`}  key = {index} >
            <div className = {`label-container ${selctedTodo}`} >
                <h1 className = {`checkbox-label ${highlightedText}`} onClick = {()=>selectedHashedWord(each.todoName)}>{each.todoName}</h1>
                <p>{each.todoCreated}</p>
                <p className = "todo-status" onClick ={() => todoSelected(each)}>{todoStatus}</p>
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

export default connect(mapStateToProps,{selectTodo,filterTodo,hashedTodo})(TodoList)