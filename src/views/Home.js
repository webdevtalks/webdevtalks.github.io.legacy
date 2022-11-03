import logo from '../assets/images/logo.png';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <img src={logo} className="logo" alt="Logo WDT" />
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/ColimaWebDevTalks" target="_blank"><i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a>
        </li>
        
        <li>
          <a href="https://www.instagram.com/webdevtalksmx" target="_blank"><i className="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://twitter.com/webdevtalksmx" target="_blank"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="https://www.linkedin.com/company/web-dev-talks" target="_blank"><i className="fa fa-linkedin fa-4x" aria-hidden="true"></i></a>
        </li>

        <li>
          <a href="mailto:contacto@webdevtalks.mx" target="_blank"><i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
        </li>
      </ul>
    </>
  );
}

export default Home;
