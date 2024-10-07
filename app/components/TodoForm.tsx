import { useState } from 'react'

interface TodoFormProps {
  addTodo: (todo: string) => void
}
export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input)
      setInput('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
