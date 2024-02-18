import { FaRegTrashAlt } from 'react-icons/fa'
interface TaskProps {
  keyTask: string
  value: string
  description: string
  col: string
  remove: (taskId: string) => void
}

const Task = ({ keyTask, value, description, col, remove }: TaskProps) => {
  const handleRemoveTask = () => {
    remove(keyTask)
  }

  return (
    <li
      key={keyTask}
      data-col={col}
      className="flex w-full min-w-40 flex-col rounded-lg border border-secondary bg-popover p-3 shadow transition-all"
    >
      <div className="text-xl text-primary"> {value} </div>
      <div className="text-base text-foreground"> {description} </div>
      <button
        className="flex items-center justify-center gap-1 text-foreground hover:text-destructive"
        onClick={handleRemoveTask}
      >
        <FaRegTrashAlt />
        Remover
      </button>
    </li>
  )
}

export { Task }
