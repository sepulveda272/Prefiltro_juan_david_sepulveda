import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

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
        let {_id,nombre,edad, sexo, direccion, celular,fecha,hora,nombreBacteriologo,examen,estado} = data;
        localStorage.setItem('ID',_id);
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

    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Edad</Table.HeaderCell>
                        <Table.HeaderCell>Sexo</Table.HeaderCell>
                        <Table.HeaderCell>Direccion</Table.HeaderCell>
                        <Table.HeaderCell>Celular</Table.HeaderCell>
                        <Table.HeaderCell>Fecha</Table.HeaderCell>
                        <Table.HeaderCell>Hora</Table.HeaderCell>
                        <Table.HeaderCell>NombreBacteriologo</Table.HeaderCell>
                        <Table.HeaderCell>Examen</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.nombre}</Table.Cell>
                                    <Table.Cell>{data.edad}</Table.Cell>
                                    <Table.Cell>{data.sexo}</Table.Cell>
                                    <Table.Cell>{data.direccion}</Table.Cell>
                                    <Table.Cell>{data.celular}</Table.Cell>
                                    <Table.Cell>{data.fecha}</Table.Cell>
                                    <Table.Cell>{data.hora}</Table.Cell>
                                    <Table.Cell>{data.nombreBacteriologo}</Table.Cell>
                                    <Table.Cell>{data.examen}</Table.Cell>
                                    <Link to = "/update">
                                        <Table.Cell><Button onClick={()=>setData(data)}>Actualizar</Button></Table.Cell>
                                    </Link>
                                    <Table.Cell><Button onClick={()=>onDelete(data._id)}>Eliminar</Button></Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}