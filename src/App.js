
import { useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [lsetf, setLsetf] = useState([]);

  const post = () => {
    const items = {
      id: lsetf.length + 1,
      Name: text,
    };

    setLsetf([...lsetf, items]);
    setText("")
  }
  function DeleteItems(id) {
    const del = lsetf.filter((el) => el.id !== id);
    setLsetf(del);
  }

  console.log(lsetf)
  console.log(text)


  return (
    <div className="cardholder">
      <br />
      <input value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter your Comment" /><br />
      <button className="post" onClick={() => {
        post()
        console.log("Have Posted")
      }} > post</button>

      {lsetf.map((props) => (
        <div className="card">
          <div>{props.id}.</div>
          <div>{props.Name}</div>
          <button onClick={() => {
            DeleteItems(props.id)
          }}>delete</button>

        </div>
      ))}

    </div>

  )
}
export default App



