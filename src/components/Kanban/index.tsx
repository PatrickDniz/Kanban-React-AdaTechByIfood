import React, { useState } from 'react'
import { Column } from './../Column'

interface TaskProps {
  key: string
  value: string
  col: string
  description: string
}

interface KanbanProps {
  tasks: {
    todo: TaskProps[]
    inProgress: TaskProps[]
    done: TaskProps[]
  }
}

const Kanban: React.FC<KanbanProps> = ({ tasks }) => {
  const [todo, setTodo] = useState(tasks.todo)
  const [inProgress, setInProgress] = useState(tasks.inProgress)
  const [done, setDone] = useState(tasks.done)

  return (
    <div className="m-2 flex flex-1 justify-start gap-5 overflow-x-auto p-4">
      <Column
        title="A fazer"
        tasks={todo}
        onAddTask={(task) => setTodo((todo) => [...todo, task])}
        onRemoveTask={(key) => {
          setTodo(todo.filter((task) => task.key !== key))
        }}
      />
      <Column
        title="Em Progresso"
        tasks={inProgress}
        onAddTask={(task) =>
          setInProgress((inProgress) => [...inProgress, task])
        }
        onRemoveTask={(key) =>
          setInProgress(inProgress.filter((task) => task.key !== key))
        }
      />
      <Column
        title="Concluído"
        tasks={done}
        onAddTask={(task) => setDone((done) => [...done, task])}
        onRemoveTask={(key) => setDone(done.filter((task) => task.key !== key))}
      />
    </div>
  )
}

export { Kanban }
