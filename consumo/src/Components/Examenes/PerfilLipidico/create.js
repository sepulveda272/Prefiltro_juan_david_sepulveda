import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function CreatePer() {
  let history = useHistory();
  const [idExamenPerfil, setIdPaciente] = useState('');
  const [glucosa, setglucosa] = useState('');
  const [colesterolTotal, setcolesterolTotal] = useState('');
  const [colesterolHDL, setcolesterolHDL ]= useState('');
  const [colesterolLDL, setcolesterolLDL ]= useState('');
  const [colesterolVLDL, setcolesterolVLDL ]= useState('');
  const [triglicerios, settriglicerios ]= useState('');
  const [error, setError] = useState('');

  const postData = () => {
    if (!idExamenPerfil || !glucosa || !colesterolTotal || !colesterolHDL ||!colesterolLDL || !colesterolVLDL || !triglicerios) {
      setError(alert ('Por favor, complete todos los campos obligatorios.')) ;
      return;
    }

    axios.post(`http://localhost:5000/api/glisemia`, {
      idExamenPerfil,
      glucosa,
      colesterolTotal,
      colesterolHDL,
      colesterolLDL,
      colesterolVLDL,
      triglicerios
    }).then(() => {
      window.location.reload()
    });
  }

  return (
    <div>
      <div id="resultados">
          <div id="titulo">
              <h4>Subir Resultados</h4>
          </div>
          <div id="tabla-resultados">
              <form action="" method="post" id="formResultadosPerfil">
                  <table class="table">
                      <thead>
                        <tr style={{borderBottom: "2px solid black"}}>
                          <th style={{backgroundColor: "rgb(231, 231, 231)"}} scope="col">Parametro</th>
                          <th style={{backgroundColor: "rgb(231, 231, 231)"}} scope="col">Valor</th>
                          <th style={{backgroundColor: "rgb(231, 231, 231)"}} scope="col">Unidades</th>
                        </tr>
                      </thead>
                      <tbody class="contenido">
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Glucosa</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputGlucosa" value={glucosa} onChange={(e)=> setglucosa}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Colesterol total</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputColesterolT" value={colesterolTotal} onChange={(e)=> setcolesterolTotal}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Colesterol HDL</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputColesterolhdl" value={colesterolHDL} onChange={(e) => setcolesterolHDL}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Colesterol LDL</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputColesterolLDL" value={colesterolLDL} onChange={(e) => setcolesterolLDL}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Colesterol VLDL</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputColesterolVLDL" value={colesterolVLDL} onChange={(e) => setcolesterolVLDL}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Trigliceridos</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputTrigliceridos" value={triglicerios} onChange={(e) => settriglicerios}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>mg/dl</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}>Id del paciente</td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}><input type="text" class="form-control" id="inputIdPaciente" value={idExamenPerfil} onChange={(e) => setIdPaciente}/></td>
                              <td style={{backgroundColor: "rgb(231, 231, 231)"}}></td>
                          </tr>
                      </tbody>
                  </table>
                  <div id="botones-peque">
                      <Link to="/" class="btn" id="cancelar">Cancelar</Link>
                      <button type="button" onClick={postData} class="btnForm" id="guardar">Guardar</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}
