
import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { useState } from 'react'




function App() {

     const [count, setCount] = useState(0); // count is state, 0 is initial value
     const [name,setName] = useState("Ashwan")

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(count - 1)}> - </button>
      <h1>{name}</h1>
      <p>Hello World!</p>
      <button onClick={()=> setName("Ashwan Shrestha")}>Change Name</button>
    </div>
  
  //  <BrowserRouter>
  //  <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path ='/about' element={<About />}/>
  //     <Route path ='/contact' element={<Contact />}/>
  //  </Routes>

  //  </BrowserRouter>
  )
}


export default App
