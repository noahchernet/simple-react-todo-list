import React from "react";

function NewTodo () {
  return (<div>
      <form>
        <input type={'text'}/>
        <input type={'submit'} value={"Add Todo"}/>
      </form>
    </div>
  )
}

export default NewTodo;