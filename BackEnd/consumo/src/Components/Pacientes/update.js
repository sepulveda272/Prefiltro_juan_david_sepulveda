import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {Form} from 'semantic-ui-react';

export default function Update(){
    let history = useHistory();
    const [id, setID] = useState(null);
    const [nombre, setNombre ] = useState('');
    const [edad, setEdad ] = useState('');
    const [sexo, setSexo ] = useState('');
    const [direccion, setDirecion ] = useState('');
    const [celular, setCelular ] = useState('');
    const [fecha, setFecha ] = useState('');
    const [hora, setHora ] = useState('');
    const [nombreBacteriologo, setNombreBacteriologo ] = useState('');
    const [examen, setExamen ] = useState('');
    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setEdad(localStorage.getItem('Edad'));
        setSexo(localStorage.getItem('Sexo'));
        setDirecion(localStorage.getItem('Direccion'));
        setCelular(localStorage.getItem('Celular'));
        setFecha(localStorage.getItem('Fecha'));
        setHora(localStorage.getItem('Hora'));
        setNombreBacteriologo(localStorage.getItem('NombreBacteriologo'));
        setExamen(localStorage.getItem('Examen'));
    },[]);

    const updateAPIData = ()=>{
        axios.put(`http://localhost:5000/api/pacientes/${id}`,
        {
            nombre,
            edad,
            sexo,
            direccion,
            celular,
            fecha,
            hora,
            nombreBacteriologo,
            examen
        }
        ).then(()=>{
            window.location.reload();
        })
    }
    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <Form>
                    <input type="hidden" id="idEdit" name="" />
                    <div class="mb-3">
                        <label for="nombreEdit" class="form-label">Nombre del paciente : </label>
                        <input type="text" class="form-control" id="nombreEdit" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="edadEdit" class="form-label">Edad : </label>
                        <input type="number" class="form-control" id="edadEdit" value={edad} onChange={(e) => setEdad(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="sexoEdit" class="form-label">Sexo : </label>
                        <select id="sexoEdit" class="form-select" value={sexo} onChange={(e) => setSexo(e.target.value)} >
                            <option selected>Genero...</option>
                            <option>Hombre</option>
                            <option>Mujer</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="direccionEdit" class="form-label">Direccion : </label>
                        <input type="text" class="form-control" id="direccionEdit" value={direccion} onChange={(e) => setDirecion(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="celularEdit" class="form-label">Celular : </label>
                        <input type="number" class="form-control" id="celularEdit" value={celular} onChange={(e) => setCelular(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="fechaEdit" class="form-label">Fecha : </label>
                        <input type="date" class="form-control" id="fechaEdit" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="horaEdit" class="form-label">Hora : </label>
                        <input type="time" class="form-control" id="horaEdit" value={hora} onChange={(e) => setHora(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="nombreBacEdit" class="form-label">nombre Bacteriologo : </label>
                        <input type="text" class="form-control" id="nombreBacEdit" value={nombreBacteriologo} onChange={(e) => setNombreBacteriologo(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="examenEdit" class="form-label">Examen : </label>
                        <select id="examenEdit" class="form-select" value={examen} onChange={(e) => setExamen(e.target.value)}>
                            <option selected>Examen</option>
                            <option>Cuadro Hematico</option>
                            <option>Glisemia</option>
                            <option>Perfil Lipidico</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btnForm" data-bs-dismiss="modal">Cerrar</button>
                        <Link to='/'><button type='submit' onClick={updateAPIData} class="btn btn-primary btnForm">Actualizar</button></Link>
                    </div>
                </Form>
            </div>
            </div>
        </div>
        </div>
    )
}