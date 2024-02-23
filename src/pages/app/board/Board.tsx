import { Kanban } from '@/components/Kanban'

function Board() {
  return (
    <>
      <div className="relativ w-full overflow-auto">
        <h1 className="m-5 mb-5 text-2xl font-semibold text-primary">
          Meu Board
        </h1>
        <Kanban tasks={{ todo: [], inProgress: [], done: [] }} />
      </div>
    </>
  )
}

export default Board
