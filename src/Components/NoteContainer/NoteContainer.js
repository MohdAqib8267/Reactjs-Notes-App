import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'
function NoteContainer(props) {

  const reverseArray=(arr)=>{
    const array=[];
    for(let i=arr.length-1; i>=0;--i){
      array.push(arr[i])
    }
    return array;
  };
//console.log(props.notes);
 const notes=reverseArray(props.notes);
 //cnsole.log(notes);
  return (
    <div className='note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
          {
            
            notes.length>0? notes.map((item)=>
            <Note 
            note={item}
            key={item.id}
            deleteNote={props.deleteNote}
            updateText={props.updateText}/>
            )
            : <h1 style={{width: "100%",textAlign: "center"}}>No Notes present</h1>
          }
      </div>
    </div>
  )
}

export default NoteContainer
