import axios from 'axios';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Perfil from '../../assets/fotoPerfil.jpeg'

export default function CreateB(){
    let history = useHistory();
    const [nombre, setNombre ] = useState('');
    const [edad, setEdad ] = useState('');
    const [email, setEmail ] = useState('');
    const [experiencia, setExperiencia ] = useState('');
    const [cedula, setCedula ] = useState('');
    const [imagen, setImagen ] = useState('');
    const [error, setError ] = useState('')

    const postData = ()=>{
        if (!nombre || !edad || !email || !experiencia || !cedula || !imagen) {
            setError(alert ('Por favor, complete todos los campos obligatorios.')) ;
            return;
          }

        axios.post(`http://localhost:5000/api/bacteriologos`,
        {
            nombre,
            edad,
            email,
            experiencia,
            cedula,
            imagen
        }
        ).then(()=>{
            history.push('/bacteriologos')
        })
    }
    return(
        <div>
            <nav>
                <div className="item-nav1">
                    <i className="fa-solid fa-virus-covid" style={{backgroundColor: "#7BE8D4", color: "#140733"}}></i>
                    <h1 style={{height: "3.4rem"}}>Registro</h1>
                </div>
                <div className="item-nav2">
                    <div className="d-flex flex-column align-items-end">
                        <h4 className="nombreP">Jairo Sepulveda</h4>
                        <div className="cerrarSesion">
                            <div id="iconos">
                                <i id="iconoAbajo" className="fa-solid fa-angle-down" style={{fontSize: "30px"}}></i>
                                <i id="iconoArriba" className="fa-solid fa-angle-up" style={{fontSize: "30px",display: "none"}}></i>
                            </div>
                            <p className="trabajo">Bacteriologo</p>
                        </div>
                    </div>
                    <div className="contenedorPerfil">
                        <img style={{height: "100%"}} id="fotoPerfil" src={Perfil} alt="" />
                    </div>
                </div>
            </nav>
             <div>
                <div class="backgrouncito">
                    <p>Nuevo bacteriologo</p>
                </div>
                <div class="mrd">
                    <form method="post" class="row g-3 formularioB" id="formBacteriologo">
                        <div class="col-md-12">
                            <label for="inputImagen" class="form-label">Imagen</label>
                            <input type="text" class="form-control" id="inputImagen" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
                          </div>
                        <div class="col-md-6">
                          <label for="inputNombre" class="form-label">Nombre del Bacteriologo</label>
                          <input type="text" class="form-control" id="inputNombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div class="col-md-6">
                          <label for="inputEdad" class="form-label">Edad</label>
                          <input type="number" class="form-control" id="inputEdad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
                        </div>
                        <div class="col-6">
                          <label for="inputEmail" class="form-label">Email</label>
                          <input type="email" class="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="col-6">
                          <label for="inputAñosEx" class="form-label">Años de experiencia</label>
                          <input type="text" class="form-control" id="inputAñosEx" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}/>
                        </div>
                        
                        <div class="t">
                            <div class="col-md-5">
                                <label for="inputCedula" class="form-label">Cedula</label>
                                <input type="number" class="form-control" id="inputCedula" value={cedula} onChange={(e) => setCedula(e.target.value)}/>
                            </div>
                            <div>
                                <Link to="/bacteriologos" class="btn btn-danger">Cancelar</Link>
                                <button type='button' onClick={postData} className="btn btn-warning">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}