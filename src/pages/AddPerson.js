import React,{useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddPerson=()=>{
    const navigate=useNavigate()
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[telNumber,setTelNumber]=useState("");
    const savePerson=(event)=>{
        event.preventDefault()
    
    /* validation */
    if (firstName==="" || lastName==="" || telNumber==="") {
        alert("Bütün alanlar zorunludur")
       return
    }
    const newPerson={
        id:String(new Date().getTime()),
        firstName:firstName,
        lastName:lastName,
        telNumber:telNumber
    }
    axios.post("http://localhost:3004/persons",newPerson)
    .then(res=>{
        navigate("/")
    })
    .catch(err=>{})
};
    
    return(
        <div>
            <Header/>
            <div className="container my-5">
                <form onSubmit={savePerson}>
                    <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Kişi Adı</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Harmony"
                    value="firstName"
                    onChange={(event)=>setFirstName(event.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Kişi Soyadı</label>
                    <input type="text" 
                    className="form-control"
                     id="lastName"
                      placeholder="Grancer"
                      value={lastName}
                      onChange={(event)=>setLastName(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="number" className="form-label">Telefon Numarası</label>
                    <input type="text" className="form-control" id="number" placeholder="05xxxxxxxx"value="telNumber"
                    onChange={(event)=>setTelNumber(event.target.value)}/>
                    </div>

                    <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-30" type="submit">Kaydet</button>
                    </div>

                
                </form>
            </div>
        </div>

    )
}
export default AddPerson