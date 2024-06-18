export function InputComp({ ToDoList, addList, handleSubmit, Theme }) {
  return (
    <form 
      style={{
        backgroundColor: Theme ? "hsl(237, 14%, 26%)" : "hsl(236, 33%, 92%)",
      }}
      className="form-box"
      onSubmit={handleSubmit}
    >
      <div className="Fields">
        <input
          type="text"
          className="FieldsInput"
          value={ToDoList}
          onChange={addList}
          placeholder="Create a new todo.."
        />
        {/* <button>submit</button> */}
        <button className="addbtn">Add</button>
      </div>
      
    </form>
  );
}
