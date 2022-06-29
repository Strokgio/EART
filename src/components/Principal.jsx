import '../css/Principal.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Principal(){
  let navigate = useNavigate();
  return(
    <div className="container-fluid">
        <div className='box'>
          II/IV/MMXXII
        </div>
        <button  className="button" onClick={()=>navigate("/login")}>🖤¿Huyes Conmigo?💜</button>
    </div>
);
}
export default Principal;