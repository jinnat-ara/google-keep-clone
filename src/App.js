

import { useState } from "react";
import Createnote from "./component/Createnote";
import Header from "./component/Header";
import Note from "./component/Note";

function App() {
  const [additem, setItem]=useState([])

  const addnote=(note)=>{
    setItem.push(note)
  }


  return (
    <div >
<Header/>
<Createnote passnote={addnote}/>


{additem.map((index,val)=>{
  return(
    <Note key={index}
    id={index}
title={val.title}
content={val.title}


  />
  )
})}
    </div>
  );
}

export default App;
