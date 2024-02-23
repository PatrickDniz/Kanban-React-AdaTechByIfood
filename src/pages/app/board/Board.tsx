import { Kanban } from '@/components/Kanban'

const Board = () => {
  return (
    <>
      <div className="relative w-full overflow-auto">
        <h1 className="m-5 mb-5 text-2xl font-semibold text-primary">
          Meu Board
        </h1>
        <Kanban tasks={{ todo: [], inProgress: [], done: [] }} />
      </div>
    </>
  )
}

export { Board }
