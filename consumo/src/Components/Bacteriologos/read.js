import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Perfil from '../../assets/fotoPerfil.jpeg'
import '../carsd/card.css';
import './css/cardB.css';
import UpdateB from './update';

export default function ReadB(){
    const [apiData, setApiData] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/bacteriologos`)
        .then((res)=>{
            console.log(res.data);
            setApiData(res.data.bacteriologos);
        })
    },[]);

    const setData = (data) => {
        let {_id,nombre,edad,email,experiencia,cedula,imagen } = data;
        localStorage.setItem('ID',_id);
        localStorage.setItem('Nombre',nombre);
        localStorage.setItem('Edad',edad);
        localStorage.setItem('Email',email);
        localStorage.setItem('Experiencia',experiencia);
        localStorage.setItem('Cedula',cedula);
        localStorage.setItem('Imagen',imagen);
    };

    const getData = () => {
        axios.get(`http://localhost:5000/api/bacteriologos`)
        .then((getData) => {
            setApiData(getData.data.bacteriologos);
        })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:5000/api/bacteriologos/${_id}`)
        .then(() => {
            getData();
        })
    }

    return(
        <div>
            <nav>
                <div className="item-nav1">
                    <i className="fa-solid fa-virus-covid" style={{backgroundColor: "#2E295F"}}></i>
                    <h1>Bacteriologos</h1>
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
                <Link to="/createB" className="NEW btn btn-primary"><p>Nuevo +</p></Link>
            </div>
            <div className="cardds">
                {apiData.map((data)=>{
                    return(
                        <div className="card">
                        <div className="card-border-top">
                        </div>
                        <div className="img">
                            <img style={{height: "100%", width: "100%"}} src={data.imagen} alt="" />
                        </div>
                        <span>{data.nombre}</span>
                        <p className="job">{data.cedula}</p>
                        <hr />
                        <div className="info">
                            <p>Años de edad: {data.edad}</p>
                            <p>Experiencia: {data.experiencia}</p>
                            <p>Correo: {data.email}</p>
                        </div>
                        <div>
                            <button onClick={()=>setData(data)} className="btn update" style={{backgroundColor: "#937DE9"}} data-bs-toggle="modal" data-bs-target="#exampleModalBac"> Actualizar
                            </button>
                            <button className="btn btn-danger eliminar"  onClick={()=>onDelete(data._id)}> Borrar
                            </button>
                        </div>      
                    </div>
                    )
                })}
            </div>
            <UpdateB />
        </div>
    )
}