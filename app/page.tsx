'use client'
import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export default function Home() {
  const [todos, setTodos] = useState<string[]>([])
  const addTodo = (todo: string) => setTodos([...todos, todo])
  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>ToDo List xoa commi 2</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
    </div>
  )
}
