import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function CreateCu() {
  let history = useHistory();
  const [idExamenCuadro, setIdPaciente] = useState('');
  const [hematocrito, setHematocrito] = useState('');
  const [hemoglobina, setHemoglobina] = useState('');
  const [eritrocitos, setEritrocitos] = useState('');
  const [leucositos, setLeucositos] = useState('');
  const [neutrofilos, setNeutrofilos] = useState('');
  const [eosinofilos, setEosinofilos] = useState('');
  const [linfocitos, setLinfocitos] = useState('');
  const [plaquetas, setPlaquetas] = useState('');
  const [proteinasTotales, setProteinasTotales] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    if (!idExamenCuadro || !hematocrito || !hemoglobina || !eritrocitos || !leucositos || !neutrofilos || !eosinofilos || !linfocitos || !plaquetas || !proteinasTotales) {
      setError(alert ('Por favor, complete todos los campos obligatorios.')) ;
      return;
    }

    axios.post(`http://localhost:5000/api/cuadroHematico`, {
      idExamenCuadro,
      hematocrito,
      hemoglobina,
      eritrocitos,
      leucositos,
      neutrofilos,
      eosinofilos,
      linfocitos,
      plaquetas,
      proteinasTotales
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
              <form action="" method="post" id="formResultadosCuadro">
                  <table className="table">
                      <thead>
                        <tr style={{borderBottom: "2px solid black"}}>
                          <th style={{backgroundColor: "#D9D9D9"}} scope="col">Parametro</th>
                          <th style={{backgroundColor: "#D9D9D9"}} scope="col">U</th>
                          <th style={{backgroundColor: "#D9D9D9"}} scope="col">Valor</th>
                          <th style={{backgroundColor: "#D9D9D9"}} scope="col">Referencia</th>
                        </tr>
                      </thead>
                      <tbody className="contenido">
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Hematocrito</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>%</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputHematocrito" value={hematocrito} onChange={(e) => setHematocrito(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>32.2-52.8</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Hemoglobina</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>%</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputHemoglobina" value={hemoglobina} onChange={(e) => setHemoglobina(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>12.7-16.3</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Eritrocitos</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>Eri/ul</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputEritrocitos" value={eritrocitos} onChange={(e) => setEritrocitos(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>5.3000.000-8600.00</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Leucositos</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>Leu/ul</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputLeucositos" value={leucositos} onChange={(e) => setLeucositos(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>8.300-17.500</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Neutrofilos</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>%</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputNeutrofilos" value={neutrofilos} onChange={(e) => setNeutrofilos(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>65-73</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Eosinofilos</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>%</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputEosinofilos" value={eosinofilos} onChange={(e) => setEosinofilos(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>1-8</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Linfocitos</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>%</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputLinfocitos" value={linfocitos} onChange={(e) => setLinfocitos(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>9-26</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Plaquetas</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>Plt/ul</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputPlaquetas" value={plaquetas} onChange={(e) => setPlaquetas(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>160.000-525.000</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}>Proteinas total</td>
                              <td style={{backgroundColor: "#D9D9D9"}}>g/dl</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputProteinasT" value={proteinasTotales} onChange={(e) => setProteinasTotales(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>65-73</td>
                          </tr>
                          <tr style={{borderBottom: "2px solid black"}}>
                              <td style={{backgroundColor: "#D9D9D9"}}></td>
                              <td style={{backgroundColor: "#D9D9D9"}}>Id del paciente</td>
                              <td style={{backgroundColor: "#D9D9D9"}}><input type="text" className="form-control" id="inputIdPaciente" value={idExamenCuadro} onChange={(e) => setIdPaciente(e.target.value)}/></td>
                              <td style={{backgroundColor: "#D9D9D9"}}></td>
                          </tr>
                      </tbody>
                  </table>
                  <div id="botones-peque">
                      <Link to="/" className="btn" id="cancelar">Cancelar</Link>
                      <button type="button" onClick={postData} className="btnForm" id="guardar">Guardar</button>
                  </div>
              </form>
          </div>
          
      </div>
    </div>
  )
}
