import { SyntheticEvent, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ImSpinner2 } from 'react-icons/im'
import { IoCloseSharp } from 'react-icons/io5'

interface ModalProps {
  active: boolean
  addTask: (nome: string, desc: string) => void
  closeModal: () => void
}

const ModalTask = ({ active, addTask, closeModal }: ModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [nameReturn, setNameReturn] = useState(true)
  const [descReturn, setDescReturn] = useState(true)

  const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTaskDesc(value)
    !value ? setDescReturn(false) : setDescReturn(true)
  }
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTaskName(value)
    !value ? setNameReturn(false) : setNameReturn(true)
  }

  async function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 100)

    if (taskName && taskDesc) {
      addTask(taskName, taskDesc)
      setNameReturn(true)
      setDescReturn(true)
      setTaskName('')
      setTaskDesc('')
    } else {
      !taskName ? setNameReturn(false) : setNameReturn(true)
      !taskDesc ? setDescReturn(false) : setDescReturn(true)
    }
  }
  return (
    <div
      className={`fixed left-0 top-0 flex items-center justify-center bg-gray-400/15 backdrop-blur-[2px] ${active ? 'h-full w-full opacity-100' : 'h-0 w-0 overflow-hidden opacity-0'}`}
    >
      <form
        className="relative flex h-64 w-64 flex-col items-center justify-around rounded-md bg-background p-5 shadow transition-all"
        onSubmit={onSubmit}
      >
        <div className="flex w-full items-center justify-between rounded-t">
          <h3 className="text-xl font-semibold text-foreground">
            Adicionar Task
          </h3>
          <button
            onClick={closeModal}
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <IoCloseSharp className="h-6 w-6" />
          </button>
        </div>
        <div className="w-full space-y-2">
          <div className="relative z-0">
            <input
              id="taskName"
              type="text"
              className={`peer block h-9 w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0 ${nameReturn ? 'border-input' : 'border-destructive'}`}
              placeholder=" "
              value={taskName}
              onChange={(e) => handleChangeName(e)}
            />
            <label
              htmlFor="taskName"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
            >
              Nome da Task
            </label>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="relative z-0">
            <input
              id="taskDesc"
              type="text"
              className={`peer block h-9 w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0 ${descReturn ? 'border-input' : 'border-destructive'}`}
              placeholder=" "
              value={taskDesc}
              onChange={(e) => handleChangeDesc(e)}
            />
            <label
              htmlFor="taskDesc"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
            >
              Descrição da Task
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <ImSpinner2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Adicionar
        </Button>
      </form>
    </div>
  )
}

export { ModalTask }
