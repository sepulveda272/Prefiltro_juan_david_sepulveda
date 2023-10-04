import React from 'react';
import './App.css'; // Importa tus estilos CSS globales
import Sidebar from './Components/sidebar.js';
import MiComponenteReact from './Components/parteDerecha.js';

function App() {
  return (
    <div className="contenedor">
      <Sidebar />
      <MiComponenteReact />
    </div>
  );
}

export default App;