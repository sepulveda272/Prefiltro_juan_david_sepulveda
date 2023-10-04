import {Link} from 'react-router-dom'

function Sidebar(){
    return(
        <div>
            <Link to='/'>
                Pacientes
            </Link>
            <br />
            <Link to='/bacteriologos'>
                Bacteriologo
            </Link>
            <br />
            <Link to='/examen'>
                Examen
            </Link>
            <br />
            <Link to='/resultado'>
                Resultados
            </Link>
        </div>
    )
}

export default Sidebar