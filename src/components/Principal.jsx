import '../css/Principal.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Principal(){
  let navigate = useNavigate();
  function show(){

    Swal.fire({
      title: 'No quiero andar con rodeos, Te quiero 💜. Te esperan tres pruebas para poder ver lo que siento por ti, ¿lista?',
      width: 600,
      padding: '1em',
      color: '#fff',
      background: '#201f20 ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.giphy.com/media/iqotJVKLfXsWiAZjbl/giphy.gif")
        left top
        no-repeat
      `
    }).then(respuesta=>{
      if(respuesta){
        navigate("/puzzle")
      }
    })
  };
  return(
    <div className="container-fluid">
        <div className='box'>
          You Are My Everything💜
        </div>
        <button  className="button" value="" onClick={() => show()}>🖤¿Huyes Conmigo?💜</button>
    </div>
);
}
export default Principal;