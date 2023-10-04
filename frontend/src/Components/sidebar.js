import React from 'react';
import logo from '../assets/logoRVG.png'
import House from '../assets/hogar.svg'

function Sidebar() {
  return (
    <div className="navabar">
      <div id="hola">
        <div id="dos">
          <img src={logo} alt="" id="logo" />
        </div>
        <div id="uno" style={{ marginTop: '18px' }}>
          <div className="active">
            <a href="#">
              <img src={House} className="icon icon-home3" />
            </a>
          </div>
        </div>
        <div id="uno">
          <a href="../bacteriologo/bateriologo.html">
            <img src={House} className="icon icon-home3" />
          </a>
        </div>
        <div id="uno">
          <a href="../examen/cuadroHematico/cuadro.html">
            <img src={House} className="icon icon-home3" />
          </a>
        </div>
        <div id="uno">
          <a href="../resultados/resultados.html">
            <img src={House} className="icon icon-home3" />
          </a>
        </div>
      </div>
      <div id="hola1">
        <div id="tres">
          <a href="../index.html">
            <img src={House} className="icon icon-home3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
