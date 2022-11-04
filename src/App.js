

import { useState } from "react";
import Createnote from "./component/Createnote";
import Header from "./component/Header";
import Note from "./component/Note";

function App() {
  const [list, setList] = useState([])

  const addnote = (note) => {
    setList([...list,note]);
  }



  const generateRandomColor = () => {
    const randomColor = "#"+Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }


  return (
    <div >
      <Header />
      <Createnote passnote={addnote} />


      {list.map((item, index) => {
        return (
          <Note key={index}
            id={index}
            title={item.title}
            content={item.content}
            background={generateRandomColor()}
          />
        )
      })}
    </div>
  );
}

export default App;
