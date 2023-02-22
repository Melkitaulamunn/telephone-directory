import React from "react";
import {BrowserRouter,Routes,Route} from  "react-router-dom";
import Home from "./pages/Home";
import AddPerson from "./pages/AddPerson";
import EditPerson from "./pages/EditPerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-person" element={<AddPerson/>}/>
        <Route path="/edit-person/:personId" 
        element={<EditPerson/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
