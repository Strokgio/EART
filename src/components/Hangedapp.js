import React, { Component } from 'react';
import Imagen from './Imagen';
import Botonera from './Botonera';
import PalabraAdivinadaHastaElMomento from './PalabraAdivinadaHastaElMomento';
//import Dialog from 'react-bootstrap-dialog';
import '../css/Hangedapp.css';
import Swal from "sweetalert2";
import {withRouter} from './withRouter';

class Hangedapp extends Component {
  constructor(props){
    super(props);

    this.getBotoneraVacia = this.getBotoneraVacia.bind(this);
    this.sePulsoBoton = this.sePulsoBoton.bind(this);
    this.getPalabraAAdivinar = this.getPalabraAAdivinar.bind(this);
    this.getPalabraAdivinadaHastaElMomento = this.getPalabraAdivinadaHastaElMomento.bind(this);
    this.openModal = this.openModal.bind(this);
    let palabraAAdivinar = this.getPalabraAAdivinar();
    this.getwithRouter=this.getwithRouter.bind(this);

    this.state = {
      numFallos: 0,
      numAciertos: 0,
      palabraAAdivinar: palabraAAdivinar,
      palabraAdivinadaHastaElMomento: this.getPalabraAdivinadaHastaElMomento(palabraAAdivinar),
      botones: this.getBotoneraVacia()

      

    };
  }

  getwithRouter()
    {
        this.props.navigate('/login')
    }

  getPalabraAdivinadaHastaElMomento(palabra){
    let guiones = "";
    for(let i = 0; i < palabra.length; i++){
      guiones += "-";
    }
    return guiones;
  }

  getPalabraAAdivinar(){
    let palabras = [ "PATRAÑAS", "ENAMORADO", "ANDREA" ];
    let numAleatorio = Math.floor(Math.random() * palabras.length);
    let palabra = palabras[numAleatorio];
    return palabra;
  }

  getBotoneraVacia(){
    let letras = [
      "A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N", 
      "Ñ", "O", "P", "Q", "R", "S", "T", 
      "U", "V", "W", "X", "Y", "Z"
    ];

    let botones = [];

    botones = letras.map((l) => ({ letra: l, estado: "no-pulsado"}));

    return botones;

  }

  sePulsoBoton(i){
    let letra = this.state.botones[i].letra;
    let botonesAux = this.state.botones;

    if(this.hayAcierto(letra)){
      botonesAux[i].estado = "pulsado-acertado";
      this.setState((prevState) => ({
        botones: botonesAux
      }));
    } else {
      botonesAux[i].estado = "pulsado-no-acertado";
      this.setState((prevState) => ({
        numFallos: ++(prevState.numFallos),
        botones: botonesAux
      }));
    }
  }

  componentDidUpdate(){
    if(this.state.numAciertos == this.state.palabraAAdivinar.length){
      this.openModal("true");
      this.reinicilizar();
    } 
    if(this.state.numFallos == 6){
      this.openModal("false");
      this.reinicilizar();
    }
  }

  reinicilizar(){
    let palabraAAdivinar = this.getPalabraAAdivinar();
    
    this.setState({
      numFallos: 0,
      numAciertos: 0,
      palabraAAdivinar: palabraAAdivinar,
      palabraAdivinadaHastaElMomento: this.getPalabraAdivinadaHastaElMomento(palabraAAdivinar),
      botones: this.getBotoneraVacia()
    }); 
  }

  hayAcierto(letra){
    let acierto = false;
    for(let i = 0; i < this.state.palabraAAdivinar.length; i++){
      if(this.state.palabraAAdivinar.charAt(i) === letra){
        this.setState((prevState) => ({
          numAciertos: ++(prevState.numAciertos),
          palabraAdivinadaHastaElMomento: 
            prevState.palabraAdivinadaHastaElMomento.substr(0, i) +
            letra +
            prevState.palabraAdivinadaHastaElMomento.substr(i + 1)
        }));
        acierto = true;
      }
    }
    return acierto;
  }

  render() {
    return (
        <div className = 'container'>
          <Imagen numFallos={this.state.numFallos}/>
          <PalabraAdivinadaHastaElMomento 
            PalabraAdivinadaHastaElMomento={this.state.palabraAdivinadaHastaElMomento} />
          <Botonera sePulsoBoton={(i) => this.sePulsoBoton(i)} botones={this.state.botones}/>
        </div>
    );
  }


  


  openModal(mensaje){
    
    const showAlert=()=>{
      Swal.fire({
        title: 'Lo lograste mi cielo!!🥳🎉 lograste salvarme y vencerme en ahorcados 💜',
        width: 600,
        padding: '1em',
        color: '#fff',
        background: '#201f20 ',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/t1uSqAsy79owkL0IcL/giphy.gif")
          left top
          no-repeat
        `
      }).then(respuesta=>{
        if(respuesta){
          showa();
        }
      })
    }
  
    const showa=()=>{
      Swal.fire({
        title: 'Solo te queda un paso más mi amor, 💜¿estas lista?🖤',
        width: 600,
        padding: '1em',
        color: '#fff',
        background: '#201f20 ',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/FY71TUGwf757a9VEgA/giphy.gif")
          left top
          no-repeat
        `
      }).then(respuesta=>{
        if(respuesta){
          this.getwithRouter();
        }
      })
    }

    const showb=()=>{
      Swal.fire({
        title: 'Me mori ☠️ La palabra era '  + this.state.palabraAAdivinar  + '. Vuelve a intentarlo corazón',
        width: 600,
        padding: '1em',
        color: '#fff',
        background: '#201f20 ',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.giphy.com/media/BxPBMJA0Gd9PMNqBO3/giphy.gif")
          left top
          no-repeat
        `
      }).then(respuesta=>{
      })
    }


    if(mensaje=="true"){
      showAlert();
    }else{
      showb();
    }
  }

}



export default withRouter(Hangedapp);
