import React from 'react';
import Perfil from '../../assets/fotoPerfil.jpeg'

export default function NavbarExamenesss(){
    return(
        <nav>
            <div className="item-nav1">
                <i className="fa-solid fa-stethoscope" style={{backgroundColor: "#2E295F"}}></i>
                <h1>Examen</h1>
            </div>
            <div className="item-nav2">
                <div className="d-flex flex-column align-items-end">
                    <h4 className="nombreP">Jairo Sepulveda</h4>
                    <div className="cerrarSesion">
                        <div id="iconos">
                            <i id="iconoAbajo" className="fa-solid fa-angle-down" style={{fontSize: "30px"}}></i>
                            <i id="iconoArriba" className="fa-solid fa-angle-up" style={{fontSize: "30px", display: "none"}}></i>
                        </div>
                        <p className="trabajo">Bacteriologo</p>
                    </div>
                </div>
                <div className="contenedorPerfil">
                    <img style={{height: "100%"}} id="fotoPerfil" src={Perfil} alt="" />
                </div>
            </div>
        </nav>
    )
}