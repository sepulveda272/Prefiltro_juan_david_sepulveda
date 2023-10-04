import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Table, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

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
            <h2 className='main-header'>Bacteriologos</h2>
            <Link to="/createB">
              <Button>Registrar Bacteriologo</Button>
            </Link>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Edad</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Experiencia</Table.HeaderCell>
                        <Table.HeaderCell>Cedula</Table.HeaderCell>
                        <Table.HeaderCell>Imagen</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.nombre}</Table.Cell>
                                    <Table.Cell>{data.edad}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.experiencia}</Table.Cell>
                                    <Table.Cell>{data.cedula}</Table.Cell>
                                    <Table.Cell>{data.imagen}</Table.Cell>
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