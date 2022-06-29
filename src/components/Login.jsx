import React,{useState} from 'react';
import  '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login(){
    let navigate = useNavigate();
    const[datos,setDatos] = useState({
		username: '',
		password: ''
	});

    const changeDatos = (event) =>{
        setDatos({
			...datos,
            [event.target.name] : event.target.value
        })
    }

	const[state,setState] = useState({loading: false, error:false})

	const sendDates = (event) => {
		setState({loading:true, error:false})
		event.preventDefault();
		console.log(datos.username + " - "+ datos.password)
		Axios.post("https://eartbakend.herokuapp.com/api/login",{
			username : datos.username,
			password : datos.password,
		}).then(({ data }) =>{
			setState({loading:false, error:false})
			navigate("/puzzle")
		})
		.catch(({response}) =>{
			setState({loading:false, error:true})
			console.log(response.data)
		})
	};

    return (
		<>
        <div className='container-fluid'>
            <div className="box">You Are My Everything💜</div> 
            <div className="container">
	            <div className="d-flex justify-content-center h-100">
		            <div className="card">
			            <div className="card-header">
				            <div>Mi Amor🖤</div>
			            </div>
						{!state.loading && <div className="card-body">
				        <form >
					        <div className="input-group">
						        <div className="input-group-prepend">
							        <div className="input-group-text">💜</div>
						        </div>
						        <input type="text"  className="form-control" name="username"  placeholder="Nombre De Mi Hermosa Novia" onChange={changeDatos} />	
					        </div>
					        <div className="input-group">
						        <div className="input-group-prepend">
							        <div className="input-group-text">📅</div>
						        </div>
						        <input type="password"  className="form-control" name="password" autoComplete="on" placeholder="La Fecha En La Que Inicio Nuestra Historia" onChange={changeDatos}/>
					        </div>
					        <div className="form-group">
						        <button  className="btn float-right login_btn" type="submit" onClick={sendDates} >Ingresar</button>
					        </div>
				        </form>
					
			        </div>}
					{state.error && <div className= "card-footer">
						<div>Vuelve a Intentarlo Mi Amor</div>
					</div>}
		        </div>
	        </div>
            </div>
        </div>
			
		</>
    );

}
export default Login;