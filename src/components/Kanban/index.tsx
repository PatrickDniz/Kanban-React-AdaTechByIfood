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

  const moveTaskToNextColumn = (taskId: string, currentCol: string) => {
    switch (currentCol) {
      case 'A Fazer':
        const taskToMoveToDoing = todo.find(task => task.key === taskId);
        if (taskToMoveToDoing) {
          setTodo(todo.filter((task) => task.key !== taskId));
          if (taskToMoveToDoing.col === "A Fazer") {
              taskToMoveToDoing.col = "Em Progresso"
              setInProgress([...inProgress, taskToMoveToDoing]);
          }
        }
        break;
      case 'Em Progresso':
        const taskToMoveToDone = inProgress.find(task => task.key === taskId);
        if (taskToMoveToDone) {
          setInProgress(inProgress.filter(task => task.key !== taskId));
          if (taskToMoveToDone.col === "Em Progresso") {
              taskToMoveToDone.col = "Concluído"
              setDone([...done, taskToMoveToDone]);
          }
        }
        break;
      default:
        break;
    }
  };

  const moveTaskToPreviousColumn = (taskId: string, currentCol: string) => {
    switch (currentCol) {
      case 'Em Progresso':
        const taskToMoveToToDoing = inProgress.find(task => task.key === taskId);
        if (taskToMoveToToDoing) {
          setInProgress(inProgress.filter(task => task.key !== taskId));
          if (taskToMoveToToDoing.col === "Em Progresso") {
              taskToMoveToToDoing.col = "A Fazer"
              setTodo([...todo, taskToMoveToToDoing]);
          }
        }
        break;
      case 'Concluído':
        const taskToMoveToInProgress = done.find(task => task.key === taskId);
        if (taskToMoveToInProgress) {
          setDone(done.filter(task => task.key !== taskId));
          if (taskToMoveToInProgress.col === "Concluído") {
              taskToMoveToInProgress.col = "Em Progresso"
              setInProgress([...inProgress, taskToMoveToInProgress]);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="m-2 flex flex-1 justify-start gap-5 overflow-x-auto p-4">
      <Column
        title="A Fazer"
        tasks={todo}
        onAddTask={(task) => setTodo((todo) => [...todo, task])}
        onRemoveTask={(key) => {
          setTodo(todo.filter((task) => task.key !== key));
        }}
        moveTaskToNextColumn={moveTaskToNextColumn}
        moveTaskToPreviousColumn={() => {}}
      />
      <Column
        title="Em Progresso"
        tasks={inProgress}
        onAddTask={(task) => setInProgress((inProgress) => [...inProgress, task])}
        onRemoveTask={(key) => setInProgress(inProgress.filter((task) => task.key !== key))}
        moveTaskToNextColumn={moveTaskToNextColumn}
        moveTaskToPreviousColumn={moveTaskToPreviousColumn}
      />
      <Column
        title="Concluído"
        tasks={done}
        onAddTask={(task) => setDone((done) => [...done, task])}
        onRemoveTask={(key) => setDone(done.filter((task) => task.key !== key))}
        moveTaskToNextColumn={() => {}}
        moveTaskToPreviousColumn={moveTaskToPreviousColumn}
      />
    </div>
  )
}

export { Kanban }
