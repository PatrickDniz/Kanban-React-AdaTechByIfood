import { useState } from 'react'
import { Task } from './../Task'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { ModalTask } from '../ModalTask/ModalTask.tsx'

interface TaskProps {
  key: string
  value: string
  description: string
  col: string
}

interface ColumnProps {
  title: string
  tasks: TaskProps[]
  onAddTask: (task: TaskProps) => void
  onRemoveTask: (key: string) => void
  moveTaskToNextColumn: (taskId: string, currentCol: string) => void;
  moveTaskToPreviousColumn: (taskId: string, currentCol: string) => void;
}

const Column: React.FC<ColumnProps> = ({
  title,
  tasks,
  onAddTask,
  onRemoveTask,
  moveTaskToNextColumn,
  moveTaskToPreviousColumn,
}) => {
  const [opacityModal, setOpacityModal] = useState(false)

  const handleAddTask = (name: string, description: string) => {
    onAddTask({
      key: String(Date.now()),
      value: name,
      col: title,
      description,
    })
    setOpacityModal(!opacityModal)
  }

  const handleOpacityModal = () => {
    setOpacityModal(!opacityModal)
  }

  return (
    <div className="h-full min-h-fit min-w-60 flex-1 rounded bg-secondary p-4">
      <div className="flex justify-between gap-3 px-1 text-foreground">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button onClick={handleOpacityModal}>
          <MdOutlineAddToPhotos className="h-6 w-6 hover:text-primary" />
        </button>
        <ModalTask
          active={opacityModal}
          addTask={handleAddTask}
          closeModal={handleOpacityModal}
        />
      </div>

      <ul className="flex flex-col gap-2 py-4">
        {tasks.map((task) => (
          <Task
            key={task.key} // Add the key prop here
            keyTask={task.key}
            value={task.value}
            description={task.description}
            col={task.col}
            remove={onRemoveTask}
            moveTaskToNextColumn={moveTaskToNextColumn}
            moveTaskToPreviousColumn={moveTaskToPreviousColumn}
          />
        ))}
      </ul>
    </div>
  )
}

export { Column }
