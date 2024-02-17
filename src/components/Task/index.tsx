interface TaskProps {
  keyTask: string;
  value: string;
  status: string;
  remove: (taskId: string) => void;
}

const Task = ({ keyTask, value, status, remove }: TaskProps) => {

  const handleRemoveTask = () => {
    remove(keyTask);
  };

  return (
    <li key={keyTask} className="task">
      <div className="taksValue"> {value} </div>
      <div> {status} </div>
      <button onClick={handleRemoveTask}>Remover</button>
    </li>
  );
};

export {Task};
