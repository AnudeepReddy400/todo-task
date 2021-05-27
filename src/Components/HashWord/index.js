import {connect} from 'react-redux'
import {todoWord,filterTodo} from '../../actions'


const HashWord = (props)=>{
    const{todos,searchWord} = props
    const wordSelected = value =>{
        props.todoWord(value)
        props.filterTodo(value)
    }
    if(searchWord === ""){
        return <div></div>
    }else{
        const filterList = todos.filter((each)=>each.todoName[0] === "#")
        const hashedWords = filterList.filter((each)=>each.todoName.includes(searchWord))
        return hashedWords.map(each =>{
            return(
                <p onClick = {()=>wordSelected(each.todoName)}>{each.todoName}</p>
            )
        })
    }
    
}

const mapStateToProps = state =>{
    return{
        todos: state.todos,
        searchWord : state.searchWord
    }
}

export default connect(mapStateToProps,{todoWord,filterTodo})(HashWord)