import '../navbar/navbr.css'
import axios from 'axios';
import React,{useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Perfil from '../../assets/fotoPerfil.jpeg'
import Update from './update.js';

export default function Read(){
    const [apiData, setApiData] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/pacientes`)
        .then((res)=>{
            console.log(res.data);
            setApiData(res.data.pacientes);
        })
    },[]);

    const setData = (data) => {
        let {_id,idPaciente,nombre,edad, sexo, direccion, celular,fecha,hora,nombreBacteriologo,examen,estado} = data;
        localStorage.setItem('ID',_id);
        localStorage.setItem('Id',idPaciente);
        localStorage.setItem('Nombre',nombre);
        localStorage.setItem('Edad',edad);
        localStorage.setItem('Sexo',sexo);
        localStorage.setItem('Direccion',direccion);
        localStorage.setItem('Celular',celular);
        localStorage.setItem('Fecha',fecha);
        localStorage.setItem('Hora',hora);
        localStorage.setItem('NombreBacteriologo',nombreBacteriologo);
        localStorage.setItem('Examen',examen);
        localStorage.setItem('Estado',estado);
    };

    const getData = () => {
        axios.get(`http://localhost:5000/api/pacientes`)
        .then((getData) => {
            setApiData(getData.data.pacientes);
        })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:5000/api/pacientes/${_id}`)
        .then(() => {
            getData();
        })
    }

    /* const borrarLocalStorage = ()=>{
        localStorage.clear();
    } */

    return(
        <div>
            <nav>
                <div className='item-nav1'> 
                    <i className="fas fa-user"></i>
                    <h1>Pacientes-c</h1>
                </div>
                <div className="item-nav2">
                    <div className="d-flex flex-column align-items-end">
                        <h4 className="nombreP">Jairo Sepulveda</h4>
                        <div className="cerrarSesion">
                            <div id="iconos">
                                <i id="iconoAbajo" className="fa-solid fa-angle-down" style={{fontSize: "30px"}}></i>
                                <i id="iconoArriba" className="fa-solid fa-angle-up" style={{fontSize: "30px", display: "none"}}></i>
                            </div>
                            <p className="trabajo">Bacteriologo</p>
                        </div>
                    </div>
                    <div className="contenedorPerfil">
                        <img style={{height: "100%"}} id="fotoPerfil" src={Perfil} alt="" />
                    </div>
                </div>
            </nav>
            <div className="navAbajo">
                <div id="buscar" className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search..." aria-describedby="button-addon2" />
                    <button className="btn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>  
                <Link to="/create" className="NEW btn btn-primary"><p>Nuevo +</p></Link>
            </div>
            <div className="taba">
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Bacteriologo</th>
                        <th scope="col">Hora.Atencion</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Borrar</th>
                      </tr>
                    </thead>
                    <tbody className="contenido">
                        {apiData.map((data)=>{
                                return(
                                    <tr>
                                        <th scope="row">{data.idPaciente}</th>
                                        <td>{data.nombre}</td>
                                        <td>{data.edad}</td>
                                        <td>{data.nombreBacteriologo}</td>
                                        <td>{data.hora}</td>
                                        <td>
                                        <button onClick={()=>setData(data)} className="btn update" style={{backgroundColor: "#937DE9"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Actualizar
                                        </button>
                                        </td>
                                        <td><button class="btn btn-danger eliminar" onClick={()=>onDelete(data._id)}>Borrar</button></td>
                                    </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                  </table>
            </div>
            <Update />
        </div>
    )
}