import { useEffect, useState } from "react";
import Usercomponents from "./components/Usercomponents";
import { addToDo, getAllToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  return (
    <div className="App">

      <div className="container">

        <h1>Userlist</h1>

        <div className="top">
          <form>
            <input
              type="text"
              placeholder="Add Username"

              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></input>

            <button type="submit" className="add" onClick={() => addToDo(text, setText, setToDo)}>Add</button>
          </form>

        </div>

        <div className="list">


          {toDo.map((item) => <Usercomponents key={item._id} text={item.text} />)}


        </div>
      </div>
    </div>
  );
}

export default App;
