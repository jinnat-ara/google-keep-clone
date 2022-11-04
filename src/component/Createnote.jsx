import React from 'react'
import { useState } from 'react'
import './createnote.css'
const Createnote = (props) => {

const [note, setNote]=useState({
    title:"",
    content:""
});


const Inputchange=(e)=>{

const {name,value}=e.target;


setNote((prevData)=>{
    return{

       
        ...prevData,
        [name]:value,
       
    }
})

}
const addbutton=()=>{
    props.passnote(note)
}


  return (
    <div><form>

<input value={note.title} onChange={Inputchange} type='text' placeholder="Title" name='title'>
</input>
<p>
    <textarea value={note.content} onChange={Inputchange} type='text' name='content' placeholder='Take a Note' >

    </textarea>
</p>
<button   onClick={addbutton}  className='button'>+</button>

        </form></div>
  )
}

export default Createnote