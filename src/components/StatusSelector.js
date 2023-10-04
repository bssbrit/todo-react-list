//, allFunction, activeFunction, clearCompleted
const StatusSelector = ({
  tasks,
  completedFunction,
  allFunction,
  activeFunction,
  clearCompleted,
}) => {
  return (
    <div>
      <p>{tasks.length} items left</p>
      {/* fazer uma lógica para caso seja 1 item left ou 0 */}
      <div>
        <button onClick={allFunction}>All</button>
        <button onClick={activeFunction}>Active</button>
        <button onClick={completedFunction}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default StatusSelector;
