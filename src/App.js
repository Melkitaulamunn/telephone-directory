import React from "react";
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Home from "./pages/Home";
import AddPerson from "./pages/AddPerson"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-person" element={<AddPerson/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
