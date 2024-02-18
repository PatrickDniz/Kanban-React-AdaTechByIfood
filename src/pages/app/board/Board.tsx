import { Kanban } from '@/components/Kanban'

function Board() {
  return (
    <>
      <div>
        <h1>Meu Board</h1>
        <Kanban tasks={{ todo: [], inProgress: [], done: [] }} />
      </div>
    </>
  )
}

export default Board
