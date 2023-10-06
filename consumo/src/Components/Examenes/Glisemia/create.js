import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function CreateGli() {
  let history = useHistory();
  const [idExamenGlisemia, setIdPaciente] = useState('');
  const [glisemiaBasal, setglisemiaBasal] = useState('');
  const [ingestion, setingestion] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    if (!idExamenGlisemia || !glisemiaBasal || !ingestion) {
      setError(alert ('Por favor, complete todos los campos obligatorios.')) ;
      return;
    }

    axios.post(`http://localhost:5000/api/glisemia`, {
      idExamenGlisemia,
      glisemiaBasal,
      ingestion
    }).then(() => {
      window.location.reload()
    });
  }

  return (
    <div>
      <div id="resultadosG">
          <div id="tituloG">
              <h4>Subir Resultados</h4>
          </div>
          <div id="tabla-resultadosG">
              <form method="post" class="row g-3 formularioG" id="formGlisemia">
                  <div class="col-md-12">
                    <label for="inputGlisemiaBasal" class="form-label NG">Glisemia basal</label>
                    <input type="text" class="form-control DAG" id="inputGlisemiaBasal" value={glisemiaBasal} onChange={(e)=>setglisemiaBasal(e.target.value)}/>
                  </div>
                  <div class="col-md-12">
                    <label for="inputIngestion" class="form-label NG">Ingestion</label>
                    <input type="text" class="form-control DAG" id="inputIngestion" value={ingestion} onChange={(e)=>setingestion(e.target.value)}/>
                  </div>
                  <div class="col-md-12">
                      <label for="inputIdPaciente" class="form-label N">Id del paciente</label>
                      <input type="text" class="form-control DAG" id="inputIdPaciente" value={idExamenGlisemia} onChange={(e)=>setIdPaciente(e.target.value)}/>
                    </div>
                  <div id="botones-pequeG">
                    <Link to="/" className="btn" id="cancelarG">Cancelar</Link>
                    <button type="button" onClick={postData} className="btnForm" id="guardarG">Guardar</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}
