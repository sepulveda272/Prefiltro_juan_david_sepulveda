import '../navbar/navbr.css'
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Perfil from '../../assets/fotoPerfil.jpeg'

export default function Create() {
  let history = useHistory();
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [nombreBacteriologo, setNombreBacteriologo] = useState('');
  const [examen, setExamen] = useState('');
  const [error, setError] = useState('');

  const postData = () => {
    if (!nombre || !edad || !sexo || !direccion || !celular || !fecha || !hora || !nombreBacteriologo || !examen) {
      setError(alert ('Por favor, complete todos los campos obligatorios.')) ;
      return;
    }

    axios.post(`http://localhost:5000/api/pacientes`, {
      nombre,
      edad,
      sexo,
      direccion,
      celular,
      fecha,
      hora,
      nombreBacteriologo,
      examen
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div>
      <div>
      <div>
            <nav>
                <div class="item-nav1">
                    <i class="fa-solid fa-user-plus" style={{backgroundColor: "#7BE8D4" ,color: "#140733"}} ></i>
                    <h1 style={{height: "3.4rem"}}>Registro</h1>
                </div>
                <div class="item-nav2">
                    <div class="d-flex flex-column align-items-end">
                        <h4 class="nombreP">Jairo Sepulveda</h4>
                        <div class="cerrarSesion">
                            <div id="iconos">
                                <i id="iconoAbajo" class="fa-solid fa-angle-down" style={{fontSize: "30px"}}></i>
                                <i id="iconoArriba" class="fa-solid fa-angle-up" style={{fontSize: "30px", display: "none"}}></i>
                            </div>
                            <p class="trabajo">Bacteriologo</p>
                        </div>
                    </div>
                    <div class="contenedorPerfil">
                        <img style={{height: "100%"}} id="fotoPerfil" src={Perfil} alt="" />
                    </div>
                </div>
            </nav>
            </div>
      </div>
      <div className="backgrouncito">
        <p>Nuevo paciente</p>
      </div>
      <div className="mrd">
        <form method="post" className="row g-3 formularioP" id="formPaciente">
          <div className="col-md-8">
            <label htmlFor="inputNombre" className="form-label">Nombre del paciente</label>
            <input type="text" className="form-control" id="inputNombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="col-md-2">
            <label for="inputEdad" className="form-label">Edad</label>
            <input type="number" className="form-control" id="inputEdad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
        </div>
        <div className="col-md-2">
            <label for="inputSexo" className="form-label">Sexo</label>
            <select id="inputSexo" className="form-select" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option selected>Genero...</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
            </select>
        </div>
        <div className="col-8">
            <label for="inputDireccion" className="form-label">Direccion del paciente</label>
            <input type="text" className="form-control" id="inputDireccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
        </div>
        <div className="col-4">
            <label for="inputCelular" className="form-label">Celular</label>
            <input type="number" className="form-control" id="inputCelular" value={celular} onChange={(e) => setCelular(e.target.value)}/>
        </div>
        <div className="col-md-2">
            <label for="inputFecha" className="form-label">Fecha de atencion</label>
            <input type="date" className="form-control" id="inputFecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <div className="col-md-2">
            <label for="inputHora" className="form-label">Hora</label>
            <input type="time" className="form-control" id="inputHora" value={hora} onChange={(e) => setHora(e.target.value)}/>
        </div>
        <div className="col-md-8">
            <label for="inputBacteriologo" className="form-label">Bacteriologo</label>
            <input type="text" className="form-control" id="inputBacteriologo" value={nombreBacteriologo} onChange={(e) => setNombreBacteriologo(e.target.value)}/>
        </div>
          <div className="t">
            <div className="col-md-4">
              <label htmlFor="inputExamen" className="form-label">Tipo de examen</label>
              <select id="inputExamen" className="form-select" value={examen} onChange={(e) => setExamen(e.target.value)} required>
                <option value="">Selecciona un examen...</option>
                <option value="Cuadro Hematico">Cuadro Hematico</option>
                <option value="Glisemia">Glisemia</option>
                <option value="Perfil Lipidico">Perfil Lipidico</option>
              </select>
            </div>
            <div>
              <Link to="/" className="btn btn-danger">Cancelar</Link>
              <button type='button' onClick={postData} className="btn btn-warning">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
