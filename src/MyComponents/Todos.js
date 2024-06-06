import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"
// import { Todo } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h1 className='my-3'>Todos list</h1>
      {props.todos.length===0 ? "No todos to display":
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} onDelete={props.onDelete}/>
      })
    }
      {/* <TodoItem todo={props.todos[0]}/> */}
    </div>
  )
}

// export default Todos;


