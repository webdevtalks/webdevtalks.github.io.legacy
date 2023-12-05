import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import { useSurvey } from '../../hooks/useSurvey'
// import { slide as Menu } from 'react-burger-menu'
import { LanguageSelector } from '../LanguageSelector';

function NavBar({ selected = null }) {
  const { openSurvey } = useSurvey()
  const { t } = useTranslation();
  
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
            <Link to="/sponsorship">{t("navbar.sponsorship", "¿Te interesa patrocinar?")}</Link>
          </li>
          <li>
            <Link to="/about">{t("navbar.aboutUs", "Acerca de nosotros")}</Link>
          </li>
          <li>
            <a href="/" onClick={openSurvey}>{t("navbar.survey", "Encuesta")}</a>
          </li>
        </ul>
        <LanguageSelector/>
        {/* <Menu right width={ 280 }>
          <Link className="menu-item" to="/sponsorship">¿Te interesa patrocinar?</Link>
          <Link className="menu-item" to="/about">Acerca de nosotros</Link>
        </Menu> */}
      </nav>
    </>
  )
}

export default NavBar
