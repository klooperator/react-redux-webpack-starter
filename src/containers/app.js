import React from 'react'
import path from 'path'
import { MyFirstComponent } from "../components/index.js"

class App extends React.Component {
 constructor(){
  super()
 }

 render(){
  return(
   <div>
     <MyFirstComponent />
   </div>
  )
 }
}

export default App
