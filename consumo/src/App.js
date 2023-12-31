import './App.css';
import Read from './Components/Pacientes/read.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './Components/Pacientes/update.js';
import Create from './Components/Pacientes/create.js';
import ReadB from './Components/Bacteriologos/read';
import Sidebar from './Components/Sidebar/sidebar';
import CreateB from './Components/Bacteriologos/create';
import UpdateB from './Components/Bacteriologos/update';
import ReadCuadro from './Components/Examenes/CuadroHematico/read';
import ReadgLISEMIA from './Components/Examenes/Glisemia/read';
import ReadPerfil from './Components/Examenes/PerfilLipidico/read';

function App() {
  return (
    <div className='contenedor'>
      <Router>
      <Sidebar />
      <div className='content'>
        <div>
          <Route path ='/create' component={Create}>
            
          </Route>
        </div>
        <div style={{marginTop: '20px'}}>
          <Route exact path = '/' component={Read}>
          
          </Route>
        </div>
        <div>
          <Route path ='/' component={Update}>
            
          </Route>
        </div>
        <div>
          <Route path ='/createB' component={CreateB}>
            
          </Route>
        </div>
        <div>
          <Route path='/bacteriologos' component={ReadB}>
            
          </Route>
        </div>
        <div>
          <Route path ='/' component={UpdateB}>
            
          </Route>
        </div>
        <div>
          <Route path ='/examenC' component={ReadCuadro}>

          </Route>
        </div>
        <div>
          <Route path ='/examenG' component={ReadgLISEMIA}>

          </Route>
        </div>
        <div>
          <Route path ='/examenP' component={ReadPerfil}>

          </Route>
        </div>
      </div>
    </Router>
    </div>  
  );
}

export default App;