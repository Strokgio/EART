import React from 'react';
import Board from "./Board";
import image from '../assets/original.png';
import '../css/Puzzle.css';

function Puzzle(){
    return(
      <div className="container-fluid">
        <div className="box">
        II/IV/MMXXII
        </div>
        <div className="App">
          <br></br>
        <div className="box1"> Resuelve el Puzzle Mi Cielo</div>
          <Board imgUrl={image} />
        </div>
      </div>
  );
  }




  export default Puzzle;