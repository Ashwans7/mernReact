
// import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { useState } from 'react'

import { useEffect, useState } from "react"




function App() {

  const [count,setCount] = useState(0)
  const [nextCount,setnextCount] = useState(0)

  //useEffect
//   //first type of useEffect
//   useEffect(()=>{
//     console.log("first useEffect")
    

//   },[])

// // Second Type of useEffect
// useEffect(()=>{
      //changing title
//   // document.title = "learning useEffect" + count
//   console.log("useEffect was called")
// },[count])

//Third type of useEffect
// useEffect(()=>{
//   console.log("Third useEffect was called")
// })


//useState
//useState hook
    //  const [count, setCount] = useState(0); // count is state, 0 is initial value
    //  const [name,setName] = useState("Ashwan")

  return (
    <>
    <h1>Learning useEffect</h1>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+ 1)}>+ </button>
    <h1>{nextCount}</h1>
    <button onClick={()=>setnextCount(nextCount + 1)}>+ </button>
    </>
    
    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    //   <button onClick={()=> setCount(count - 1)}> - </button>
    //   <h1>{name}</h1>
    //   <p>Hello World!</p>
    //   <button onClick={()=> setName("Ashwan Shrestha")}>Change Name</button>
    // </div>
  
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
