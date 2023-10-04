import axios from 'axios';
import React,{useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import { useHistory } from 'react-router';

export default function Create(){
    let history = useHistory();
    const [nombre, setNombre ] = useState('');
    const [edad, setEdad ] = useState('');
    const [sexo, setSexo ] = useState('');
    const [direccion, setDirecion ] = useState('');
    const [celular, setCelular ] = useState('');
    const [fecha, setFecha ] = useState('');
    const [hora, setHora ] = useState('');
    const [nombreBacteriologo, setNombreBacteriologo ] = useState('');
    const [examen, setExamen ] = useState('');

    const postData = ()=>{
        axios.post(`http://localhost:5000/api/pacientes`,
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
            history.push('/')
        })
    }
    return(
        <div>
            <Form className='create-form'>
            <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Edad</label>
                    <input placeholder='Edad' value={edad} onChange={(e) => setEdad(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Sexo</label>
                    <input placeholder='Sexo' value={sexo} onChange={(e) => setSexo(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Direccion</label>
                    <input placeholder='Direccion' value={direccion} onChange={(e) => setDirecion(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Celular</label>
                    <input placeholder='Celular' value={celular} onChange={(e) => setCelular(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Fecha</label>
                    <input placeholder='Fecha' value={fecha} onChange={(e) => setFecha(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Hora</label>
                    <input placeholder='Edad' value={hora} onChange={(e) => setHora(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Nombre Bacteriologo</label>
                    <input placeholder='Nombre Bacteriologo' value={nombreBacteriologo} onChange={(e) => setNombreBacteriologo(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                    <label>Examen</label>
                    <input placeholder='Examen' value={examen} onChange={(e) => setExamen(e.target.value)}></input>
                </Form.Field>
                <Button type='submit' onClick={postData}>Crear</Button>
            </Form>
        </div>
    )
}