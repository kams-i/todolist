'use client'
import { use, useState } from "react"

const home = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    if (!task.trim()) return
    setTodos([...todos, { id: Math.random(), text: task, done: false }])
    setTask('')
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const check = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo
    }))
  }

  return (
    <>
      <div className="px-[27rem]">
        <div className="flex flex-col gap-[1rem] bg-neutral-500 rounded-lg items-center mt-[5rem]">
          <h1 className="text-5xl font-bold text-amber-600">TodoList</h1>
          <div className="flex flex-row gap-[1rem]">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="enter activity" className="px-[1rem] border-2 rounded-lg border-amber-500" />
            <button onClick={addTodo} className="bg-amber-500 px-[3rem] rounded-lg hover:bg-amber-200 transition cursor-pointer text-white">Add</button>
          </div>
          <ul>
            {todos.map((todo) => (
              <li className="" key={todo.id}>
                <span onClick={() => check(todo.id)} className={todo.done ? 'line-through text-green-500' : 'text-amber-200'}><input type="checkbox" /> {todo.text}</span>
                <button className="bg-red-300 px-[0.1rem] rounded-lg text-white" onClick={() => deleteTodo(todo.id)}>❌</button>
              </li>

            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default home


