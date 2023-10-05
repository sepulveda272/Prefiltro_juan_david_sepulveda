import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function UpdateB(){
    let history = useHistory();
    const [id, setID] = useState(null);
    const [nombre, setNombre ] = useState('');
    const [edad, setEdad ] = useState('');
    const [email, setEmail ] = useState('');
    const [experiencia, setExperiencia ] = useState('');
    const [cedula, setCedula ] = useState('');
    const [imagen, setImagen ] = useState('');
    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setEdad(localStorage.getItem('Edad'));
        setEmail(localStorage.getItem('Email'));
        setExperiencia(localStorage.getItem('Experiencia'));
        setCedula(localStorage.getItem('Cedula'));
        setImagen(localStorage.getItem('Imagen'))
    },[]);

    const updateAPIData = ()=>{
        axios.put(`http://localhost:5000/api/bacteriologos/${id}`,
        {
            nombre,
            edad,
            email,
            experiencia,
            cedula,
            imagen
        }
        ).then(()=>{
            window.location.reload();
        })
    }
    return(
        <div class="modal fade" id="exampleModalBac" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post" class="formularios" id="formEditBacteriologo">
                    <input type="hidden" id="idEdit" name="" />
                    <div class="mb-3">
                        <label for="nombreEdit" class="form-label">Nombre del Bacteriologo</label>
                        <input type="text" class="form-control" id="nombreEdit" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="edadEdit" class="form-label">Edad : </label>
                        <input type="number" class="form-control" id="edadEdit" value={edad} onChange={(e) => setEdad(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="emailEdit" class="form-label">Email : </label>
                        <input type="email" class="form-control" id="emailEdit" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="experienciaEdit" class="form-label">Experiencia : </label>
                        <input type="text" class="form-control" id="experienciaEdit" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="cedulaEdit" class="form-label">Cedula : </label>
                        <input type="number" class="form-control" id="cedulaEdit" value={cedula} onChange={(e) => setCedula(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="imagenEdit" class="form-label">Imagen : </label>
                        <input type="text" class="form-control" id="imagenEdit" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btnForm" data-bs-dismiss="modal">Cerrar</button>
                        <Link to='/bacteriologos'><button type="submit" onClick={updateAPIData} class="btn btn-primary btnForm">Actualizar</button></Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}