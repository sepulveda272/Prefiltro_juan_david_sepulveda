import './App.css';
import Read from './Components/Pacientes/read.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './Components/Pacientes/update.js';
import Create from './Components/Pacientes/create.js';
import ReadB from './Components/Bacteriologos/read';
import Sidebar from './Components/Sidebar/sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main">
        <div>
          <Route path ='/create' component={Create}>
            
          </Route>
        </div>
        <div style={{marginTop: '20px'}}>
          <Route exact path = '/' component={Read}>
          
          </Route>
        </div>
        <div>
          <Route path ='/update' component={Update}>
            
          </Route>
        </div>
        <div>
          <Route path='/bacteriologos' component={ReadB}>
            
          </Route>
        </div>
      </div>
    </Router>
    
  );
}

export default App;