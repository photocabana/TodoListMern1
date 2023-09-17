import { useState } from 'react'
import './App.css'
import ProductForm from "./components/ProductForm"
import Display from "./components/Display"

function App() {
  //Getter & Setter within the [], useState([]) <- this is where the list is updated
  const [todoList, setTodoList] = useState([])

  const updateTodoList = (newTodo) => {
    setTodoList((previousTodo) => (
      [...previousTodo, newTodo]
    ))
  }

// When checkbox is clicked on List
  const strikethroughTodoList = (completeTodo) => {

    let updateTodos = todoList.map((todo) => {
      if (todo === completeTodo) {
        let newTodo = {...todo} //value is a copy of the key <let newTodo = {...copy}
        newTodo.isComplete = !newTodo.isComplete
        return newTodo
      }
      else {
        return todo
      }
    })
    setTodoList(updateTodos)
  }

// Delete Todo from List
  const deleteButton = (idTodoElement) => {
    const filteredTodos = todoList.filter((todo) => {
      return todo.id !== idTodoElement
    })
    setTodoList(filteredTodos)
  }

// returns the getter/setter info
  return (
    <div className='App'>
    <h1>My Todo List :</h1>
    <h3>the list is never ending...</h3>
      <ProductForm updateTodoList={updateTodoList}/>
      <Display 
      todoList={todoList} 
      deleteButton={deleteButton} 
      strikethroughTodoList={strikethroughTodoList}/>
    </div>
  )
}
export default App

