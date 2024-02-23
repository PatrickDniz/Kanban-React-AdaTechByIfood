import { FaRegTrashAlt ,FaArrowRight, FaArrowLeft} from 'react-icons/fa'
interface TaskProps {
  keyTask: string
  value: string
  description: string
  col: string
  remove: (taskId: string) => void
  moveTaskToNextColumn: (taskId: string, currentCol: string) => void;
  moveTaskToPreviousColumn: (taskId: string, currentCol: string) => void;
}

const Task = ({ keyTask, value, description, col, remove, moveTaskToNextColumn, moveTaskToPreviousColumn, }: TaskProps) => {
  const handleRemoveTask = () => {
    remove(keyTask)
  }

  const handleMoveNext = () => {
    moveTaskToNextColumn(keyTask, col);
  };

  const handleMovePrevious = () => {
    moveTaskToPreviousColumn(keyTask, col);
  };

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
      <div className='flex flex-row justify-between gap-3'>
        { col === "A Fazer" ?
          (<button
            className="flex items-center justify-center text-foreground text-gray-400"
            onClick={handleMovePrevious}
            disabled
             // Desabilita o botão se a tarefa estiver na coluna "A fazer" 
             >
            <FaArrowLeft size={22}/>
          </button> )
            :
          (<button
            className="flex items-center justify-center text-foreground hover:text-primary"
            onClick={handleMovePrevious}>
            <FaArrowLeft size={22}/> 
          </button>)
          }
        { col === "Concluído" ?
          <button
            className="flex items-center justify-center text-foreground text-gray-400"
            onClick={handleMoveNext}
            disabled
             // Desabilita o botão se a tarefa estiver na coluna "Concluído"
          >
            <FaArrowRight size={22}/>
          </button>
            :
            <button
            className="flex items-center justify-center text-foreground hover:text-primary"
            onClick={handleMoveNext}
             
            >
            <FaArrowRight size={22}/>
          </button>
          }
        </div>
    </li>
  )
}

export { Task }
