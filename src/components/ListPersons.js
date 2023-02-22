import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";



const ListPersons=({persons,didUpdate,setDidUpdate})=>{
  const deletePerson=(id)=>{
    if(window.confirm("Silmek istediğinize emin misiniz?")===true){
      axios.delete(`http://localhost:3004/${id}`)
      .then(res=>{
        console.log(res);
        setDidUpdate(!didUpdate)
      })
      .catch(err=>{
        console.log(err);
      })
    }
    }
    return(
        <div className="container-my5" >
          <div className="d-flex justify-content-end">
             <Link className="btn btn-primary" to={"/add-person"}> Kişi Ekle </Link>
          </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sıra No</th>
                  <th scope="col">Adı</th>
                  <th scope="col">Soyadı</th>
                  <th scope="col">Telefon Numarası</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                    persons.length===0 ?(
                        <tr>
                            <td colspan={4}>Kayıtlı kişi bulunmamaktadır</td>
                        </tr>
                    ):(
                        <>
                        {persons.map((person,index)=>(
                          <tr key="person.id">
                                <th scope="row">index+1</th>
                                <td> {persons.firstName} </td>
                                <td> {persons.lastName} </td>
                                <td> {persons.telNumber} </td>
                                <td>
                                  <div class="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={()=>deletePerson()} type="button" className="btn btn-sm btn-outline-danger">Sil</button>
                                    <Link type="button" className="btn btn-sm btn-outline-primary">Güncelle</Link>
                                  </div>
                                </td>
                            </tr>
                            ))
                            }
                        </>
                      )
                }
              
              </tbody>
            </table>
        </div>
    )
}
export default ListPersons