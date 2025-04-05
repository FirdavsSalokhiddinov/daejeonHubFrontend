import { Link } from 'react-router-dom';

const Navbarlink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className='nav-item'>
            <a className='nav-link active fw-semibold' href="#!">Home</a>
        </li>
        <li className='nav-item'>
            <Link className='nav-link fw-semibold' to="#!">Shop</Link>
        </li>
        <li>
            <a className='nav-link fw-semibold' href="#!">About</a>
        </li>
        <li>
            <a className='nav-link fw-semibold' href="#!">Contact</a>
        </li>
    </ul>
  )
}

export default Navbarlink
