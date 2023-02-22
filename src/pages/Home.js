import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import ListPersons from "../components/ListPersons"
import axios from "axios";

 const Home=()=>{
    const [didUpdate,setDidUpdate]=useState(false)
    const [persons, setPersons] = useState(null)
    useEffect(()=>{
        axios.get("http://localhost:3004/persons")
        .then(res=>{
            setPersons(res.data)
        })
        .catch(err=>{})
    },[didUpdate])
    if (persons===null) return null
    return(
        <div className="container my-5">
            <Header />
            <ListPersons persons={persons} didUpdate={didUpdate} setDidUpdate={setDidUpdate}/>
            <h1>Anasayfa</h1>
        </div>
    )
 }
 export default Home