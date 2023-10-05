import '../../navbar/examenes/navbarG.css';
import axios from 'axios';
import React,{useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CreateCu from './create';
import NavbarExamenesss from '../../navbar/navbar';
import CreateGli from './create';

export default function ReadgLISEMIA(){
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/search/pacientes/Glisemia`)
        .then((res)=>{
            console.log(res.data);
            setApiData(res.data.result);
        })
    },[]);

    const setData = (data) => {
        let {_id,idExamenCuadro,hematocrito,hemoglobina, eritrocitos, leucositos, neutrofilos,eosinofilos,linfocitos,plaquetas,proteinasTotales,estado} = data;
        localStorage.setItem('ID',_id);
        localStorage.setItem('Id',idExamenCuadro);
        localStorage.setItem('Hematocrito',hematocrito);
        localStorage.setItem('Hemoglobina',hemoglobina);
        localStorage.setItem('Eritrocitos',eritrocitos);
        localStorage.setItem('Leucositos',leucositos);
        localStorage.setItem('Neutrofilos',neutrofilos);
        localStorage.setItem('Eosinofilos',eosinofilos);
        localStorage.setItem('Linfocitos',linfocitos);
        localStorage.setItem('Plaquetas',plaquetas);
        localStorage.setItem('ProteinasTotales',proteinasTotales);
        localStorage.setItem('Estado',estado);
    };

    /* const borrarLocalStorage = ()=>{
        localStorage.clear();
    } */

    return(
        <div>
            <NavbarExamenesss />
            <div id="informacion">
                <div id="tabla1">
                    <div id="botones-grandes">
                        <Link to="/examenC"><button id="gris">Cuadro Hematico</button></Link>
                        <Link to="/examenG"><button style={{backgroundColor: "#FFB950", color: "white"}} id="naranja">Glisemia</button></Link>
                        <a href="../perfilLipidico/perfil.html"><button id="gris">Perfil Lipidico</button></a>
                    </div>
                    <div id="nombre-resultado">
                        <table className="table">
                            <thead>
                              <tr>
                                <th></th>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Subir-Resultados</th>
                              </tr>
                            </thead>
                            <tbody className="contenido">
                                {apiData.map((data)=>{
                                    return(
                                        <tr>
                                            <td></td>
                                            <th scope="row">{data.idPaciente}</th>
                                            <td>{data.nombre}</td>
                                            <td><button style={{backgroundColor: "#36FC79"}} class="btn obte">Resultados</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="tabla2">
                    <CreateGli />
                </div>
            </div>
        </div>
    )
}