import React,{ useEffect ,useState} from "react";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import axios from "axios";
const EditPerson=()=>{
    const params=useParams()
    const [editPerson,setEditPerson]=useState(null);
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[telNumber,setTelNumber]=useState("");
    const edittPerson=(event)=>{
        event.preventDefault()
        /* validation */
    if (firstName==="" || lastName==="" || telNumber==="") {
        alert("Bütün alanlar zorunludur")
       return
    }
    const editedPerson={
        id:params.personId,
        fistName:firstName,
        lastName:lastName,
        telNumber:telNumber
    }
    axios.put(`http://localhost:3004/persons/${params.personId}`,editedPerson)
    }
    
    useEffect(()=>{
        axios.get(`htttp://localhost:3004/persons/persons.personId`)
        .then(res=>{
            console.log(res.data);
            setEditPerson(res.data);
            setFirstName(res.data.firstName);
            setLastName(res.data.lasstName);
            setTelNumber(res.data.telNumber)
        })
        .catch(err=>{})})
        
    if (editPerson===null) {return null}  
    return(
        <div>
          <Header/>
            <div className="container my-5">
                <form onSubmit={edittPerson}>
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
                        <input type="number" className="form-control" id="number" placeholder="05xxxxxxxx"value="telNumber"
                        onChange={(event)=>setTelNumber(event.target.value)}/>
                    </div>

                    <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-30" type="submit">Güncelle</button>
                    </div>

                
                </form>
            </div>
        </div>
    )
}
export default EditPerson