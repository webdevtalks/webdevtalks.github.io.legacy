import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import { useSurvey } from '../../hooks/useSurvey'
// import { slide as Menu } from 'react-burger-menu'

function NavBar({ selected = null }) {
  const { openSurvey } = useSurvey()
  return (
    <>
      <nav>
        <ul>
          <li className="home-li">
            <Link to="/">
              <div className="wdt-leters"></div>
            </Link>
          </li>
          <li>
            <Link to="/sponsorship">¿Te interesa patrocinar?</Link>
          </li>
          <li>
            <Link to="/about">Acerca de nosotros</Link>
          </li>
          <li>
            <a href="/" onClick={openSurvey}>Encuesta</a>
          </li>
        </ul>
        {/* <Menu right width={ 280 }>
          <Link className="menu-item" to="/sponsorship">¿Te interesa patrocinar?</Link>
          <Link className="menu-item" to="/about">Acerca de nosotros</Link>
        </Menu> */}
      </nav>
    </>
  )
}

export default NavBar
