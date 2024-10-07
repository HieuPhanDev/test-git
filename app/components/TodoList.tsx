import { useState } from 'react'
interface TodoListProps {
  todos: string[]
  removeTodo: (index: number) => void
  setTodos: (todos: string[]) => void
}
export const TodoList = ({ todos, removeTodo, setTodos }: TodoListProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editText, setEditText] = useState<string>('')
  const startEditing = (index: number, todo: string) => {
    setEditingIndex(index)
    setEditText(todo)
  }
  const saveEdit = (index: number) => {
    const newTodos = [...todos]
    newTodos[index] = editText
    setTodos(newTodos)
    setEditingIndex(null)
  }

  const cancelEdit = () => {
    setEditingIndex(null)
    setEditText('')
  }
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                <button onClick={() => saveEdit(index)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => removeTodo(index)}>Remove</button>
                <button onClick={() => startEditing(index, todo)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
