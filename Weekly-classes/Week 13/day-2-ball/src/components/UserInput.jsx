import { useState } from "react";

function UserInput({ handleSubmit, setUserInput }) {
  return (
    // Added return statement here
    <form onSubmit={handleSubmit}>
      <input
        max={999}
        type="number"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button type="submit">go</button>
    </form>
  );
}

export default UserInput;
