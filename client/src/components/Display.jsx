const Display = (props) => {
  //Destructure props
  const { todoList, strikethroughTodoList, deleteButton } = props;

  return (
    <>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <p className={todo.isComplete ? "complete" : ""}> {todo.content} </p>
          <input type="checkbox" onChange={() => strikethroughTodoList(todo)} />
          <button onClick={() => deleteButton(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Display;
