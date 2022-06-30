import React, { Component } from 'react';
import '../css/Imagen.css';

class Imagen extends Component {
  constructor(props){
    super(props);

    this.getNombreImagen = this.getNombreImagen.bind(this);
  }

  getNombreImagen(){
    return "ahorcado/" + this.props.numFallos + ".png";
  }

  render() {
    return (
        <img  className='imagen' src={this.getNombreImagen()} alt="Ahorcado" />
    );
  }
}

export default Imagen;
