import logo from '../assets/images/logo.png';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <img src={logo} className="logo" alt="Logo WDT" />
    </>
  );
}

export default About;
