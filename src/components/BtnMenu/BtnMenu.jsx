import { Link} from 'react-router-dom'

function BtnMenu() {
  return (
    <div>
          <Link to="/menu">
              <button className='btn btn-success btn-lg fw-bold'>Ver Menu completo</button>
          </Link>
    </div>
  )
}

export default BtnMenu
