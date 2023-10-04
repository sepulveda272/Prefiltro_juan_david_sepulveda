import React from 'react';
import FotoPerfil from '../assets/fotoPerfil.jpeg'

function MiComponenteReact() {
  return (
    <div className="content">
      <nav>
        <div className="item-nav1">
          <i className="fas fa-user"></i>
          <h1>Pacientes-c</h1>
        </div>
        <div className="item-nav2">
          <div className="d-flex flex-column align-items-end">
            <h4 className="nombreP">Jairo Sepulveda</h4>
            <div className="cerrarSesion">
              <div id="iconos">
                <i id="iconoAbajo" className="fa-solid fa-angle-down" style={{ fontSize: '30px' }}></i>
                <i id="iconoArriba" className="fa-solid fa-angle-up" style={{ fontSize: '30px', display: 'none' }}></i>
              </div>
              <p className="trabajo">Bacteriologo</p>
            </div>
          </div>
          <div className="contenedorPerfil">
            <img style={{ height: '100%' }} id="fotoPerfil" src={FotoPerfil} alt="" />
          </div>
        </div>
      </nav>
      <div className="navAbajo">
        <div id="buscar" className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search..." aria-describedby="button-addon2" />
          <button className="btn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>  
        <a href="./registroP.html" className="NEW btn btn-primary"><p>Nuevo +</p></a>
      </div>
      <div className="taba">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Bacteriologo</th>
              <th scope="col">Hora.Atencion</th>
              <th scope="col">Actualizar</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody className="contenido">
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MiComponenteReact;
