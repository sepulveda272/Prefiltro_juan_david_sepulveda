import React from 'react';

function Sidebar() {
  return (
    <div className="navabar">
      <div id="hola">
        <div id="dos">
          <img src="../img/logoRVG.png" alt="" id="logo" />
        </div>
        <div id="uno" style={{ marginTop: '18px' }}>
          <div className="active">
            <a href="#">
              <svg className="icon icon-home3">
                <use xlinkHref="#icon-home3"></use>
              </svg>
            </a>
          </div>
        </div>
        <div id="uno">
          <a href="../bacteriologo/bateriologo.html">
            <svg className="icon icon-svg">
              <use xlinkHref="#icon-svg"></use>
            </svg>
          </a>
        </div>
        <div id="uno">
          <a href="../examen/cuadroHematico/cuadro.html">
            <svg
              className="icon"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* El contenido SVG */}
            </svg>
          </a>
        </div>
        <div id="uno">
          <a href="../resultados/resultados.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon bi bi-file-earmark-text-fill"
              viewBox="0 0 16 16"
            >
              {/* El contenido SVG */}
            </svg>
          </a>
        </div>
      </div>
      <div id="hola1">
        <div id="tres">
          <a href="../index.html">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* El contenido SVG */}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
