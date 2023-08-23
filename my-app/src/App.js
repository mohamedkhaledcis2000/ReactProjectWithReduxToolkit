import {Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import Mynav from "./Components/Mynav";
import Products from "./Components/Products";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
     <Mynav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/card' element={<Card/>}/>

     </Routes>
    </div>
  );
}

export default App;
