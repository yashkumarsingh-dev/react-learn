import { useState } from "react"
import "./App.css"


function App() {
  const [color,setColor] = useState("olive");

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">Test
      <button className="btn" onClick={() => setColor("red")}>Red</button>
      <button className="btn" onClick={() => setColor("green")}>Green</button>
      <button className="btn" onClick={() => setColor("blue")}>Blue</button>
      <button className="btn" onClick={() => setColor("yellow")}>Yellow</button>
      <button className="btn" onClick={() => setColor("black")}>Black</button>

    </div>

   </div>
  // <div style={{ width: "100vw", height: "100vh", backgroundColor: "olive" }}>
  // </div>

  )
}

export default App
