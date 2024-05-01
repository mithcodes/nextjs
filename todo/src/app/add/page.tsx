import { useState } from "react";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <label htmlFor="add"></label>
      <input
        type="text"
        id="add"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>+Add</button>
    </div>
  );
}

export default AddTodo;