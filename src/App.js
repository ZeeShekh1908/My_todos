import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import React,{ useState } from 'react';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{

      sno=todos[todos.length-1].sno + 1;
    }
    const myTodo={
      sno: sno,
      title: title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);

  }
  const [todos,setTodos]=useState([{
    sno:1,
    title:"read book1",
    desc:"you have to read a page"
  },
  {
    sno:2,
    title:"read book2",
    desc:"you have to read 2 page"
  },
  {
    sno:3,
    title:"read book3",
    desc:"you have to read 3 page"
  }]);
  return (
    <>
      <Header title="My Todos list" searchBar={false}/>
      <AddTodo addTodo={addTodo}></AddTodo>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
