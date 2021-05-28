import {connect} from 'react-redux'
import HashWord from '../HashWord'
import {Component} from 'react'
import './index.css'

import {addTodo,todoWord} from '../../actions'


class AddTodo extends Component{
   
    onAddTodo = event =>{
      if (event.key === "Enter"){
        let input = event.target.value
        console.log(input)
        this.props.dispatch(addTodo(input))
        event.target.value =''
      }
      
    }

   

    changeValue = event =>{
        let searchWord = event.target.value
        this.props.dispatch(todoWord(searchWord))
    }
    render(){
    return(
        <div className = "input-container">
            <input type="text" className="todo-user-input" value ={this.props.searchWord} onKeyDown={this.onAddTodo} onChange = {this.changeValue}/>
            <HashWord/>
        </div>
    )
}
}

const mapStateToProps = state=>{
    return{
        searchWord : state.searchWord
    }
}

export default connect(mapStateToProps)(AddTodo)