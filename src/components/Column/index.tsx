import React from 'react'
import { Task } from './../Task'

interface TaskProps {
  key: string
  value: string
  status: string
}

interface ColumnProps {
  title: string
  tasks: TaskProps[]
  onAddTask: (task: TaskProps) => void
  onRemoveTask: (key: string) => void
}

const Column: React.FC<ColumnProps> = ({
  title,
  tasks,
  onAddTask,
  onRemoveTask,
}) => {
  const handleAddTask = () => {
    const taskName = prompt('Digite o nome da nova tarefa:')
    if (taskName) {
      onAddTask({ key: String(Date.now()), value: taskName, status: title })
    }
  }

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <div>
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <Task
            key={task.key} // Add the key prop here
            keyTask={task.key}
            value={task.value}
            status={task.status}
            remove={onRemoveTask}
          />
        ))}
      </ul>
    </div>
  )
}

export { Column }
