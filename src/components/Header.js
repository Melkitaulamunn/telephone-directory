import React from "react";
import {Link} from "react-router-dom"
const Header=({page="home"})=>{
    var bgClass="bg-primary"
    if(page=="add-student"){
      bgClass="bg-success"
    }
    if(page==="edit-student"){
      bgClass="bg-danger"
    }
    return(<nav className={`navbar navbar-expand-sm navbar-dark ${bgClass}`}>
    <div className="container-fluid">
      <div className="navbar-brand">
        Student App
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/"}>
              Anasayfa
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>



    )
}
export default Header