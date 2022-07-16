import React from "react";
import "./Note.css";
import deleteIcon from "../assets/delete1.png";
let timer=500, timeout
function Note(props) {
  const formatDate = (value) => {
    if (value == null) {
      return "";
    }
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(value);
    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;

    let min = date.getMinutes();
    min=min<10 ? "0"+min : min;

    let day = date.getDate();
    const month=monthNames[date.getMonth()];
    
    return `${hrs}:${min} ${ampm} ${day} ${month}`
  };
  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer)
  }

  const updatetext=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} 
      onChange={(event)=>updatetext(event.target.value,props.note.id)}   />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => {
            props.deleteNote(props.note.id);
          }}
        />
        
      </div>
    </div>
  );
}

export default Note;
