import './css/sidebar.css'
import {Link} from 'react-router-dom';
import House from '../../assets/hogar.svg';
import logo from '../../assets/logoRVG.png';
import Virus from '../../assets/virus2.svg';

function Sidebar(){
    return(
        <div className='navabar'>
            <div id='hola'>
              <div id="dos">
                <img src={logo} alt="" id="logo" />
              </div>
              <div id="uno" style={{ marginTop: '18px' }}>
                <div className="active">
                  <Link to='/'>
                    <img src={House} className="icon icon-home3" alt='nose'/>
                  </Link>
                </div>
              </div>
              <div id="uno">
                <div className='active'>
                  <Link to="/bacteriologos">
                    <img src={Virus} className='icon icon-svg' alt='nose'></img>
                  </Link>
                </div>
              </div>
            </div>
            <div id="hola1">
              <div id="tres">
                <Link to="/">
                  <img src={House} className="icon icon-home3" alt='nose'/>
                </Link>
              </div>
            </div>
        </div>
    );
}

export default Sidebar;