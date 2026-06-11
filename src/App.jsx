// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from 'react'

// function Child(props){
//   return(
//     <div>
//       <h2> Name:{props.name}</h2>
//       <p> Age:{props.age}</p>

//     </div>
//   );
// }

function App(){
  // const [count_var,setter_func] = useState(0);

  // return(
  //   <>
  //   <h1> Welcome to App component</h1>
  //   <p>Current count: {count_var}</p>
  //   <Child name = "Sai" age={12}/>
  //   <h3>------------------</h3>
  //   <button onClick={() => setter_func(count_var+1)}>Increment</button>
  //   {/* <Child/> */}
  //   </>
  // )

  const [isOn,set_con] = useState(false);

  return (
    <div
      style={{ backgroundColor: isOn ? 'white' : 'black', height: '100vh', padding:'20px'}}> <h1 style={{color : isOn ? 'black' : "white"}}>The Light is {isOn ? "ON" : "OFF"} </h1>

      <button onClick={() => set_con(!isOn)} >Switch</button></div>
      
  
  );
  

}
export default App;