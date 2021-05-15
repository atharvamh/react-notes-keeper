import React from "react";

function Note(props) {
  function deleteN(event) {
    props.onDelete();
    event.preventDefault();
  }

  return (
    <div className="note" id={props.uniqId}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button type="button" onClick={deleteN}>
        DELETE
      </button>
    </div>
  );
}

export default Note;