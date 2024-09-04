import React from "react";

function Inputcontainer({inputvalue , writeTodo , addTodo}) {
  return (
    <div className="input-container">
      <input type="text" value={inputvalue} onChange={writeTodo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Inputcontainer;
