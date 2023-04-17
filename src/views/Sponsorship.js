import logo from '../assets/images/logo.png';
import NavBar from '../components/NavBar';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Otras areas', 'Software', 'PM', 'QA', 'Diseño', 'Estudiantes'],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 51, 6, 4, 2, 30],
        backgroundColor: [
          '#E59866',
          '#5499C7',
          '#E67E22',
          '#F7DC6F',
          '#85C1E9',
          '#58D68D',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1,
      },
    ],
  };

function Sponsorship() {
  return (
    <div className="sponsorship">
      <NavBar selected="sponsorship" />
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="Logo WDT" />
      </div>
      <section>
        <p>
            WebDevTalks es una comunidad de desarrollo y tecnología, que inició hace más de 7 años con la finalidad de acercar desarrolladores a diversos temas dentro del área del desarrollo de software, web, móvil, IoT, manejo de proyectos, diseño y más.
        </p>
        <p>
            Gracias al esfuerzo y apoyo de diversas empresas hemos podido llegar hasta el día de hoy, proporcionando un evento de calidad, ayudando a incentivar a las nuevas generaciones y fortalecer la comunidad de desarrollo en la ciudad de Colima.
        </p>
        <p>
            El evento se lleva a cabo en el último miércoles de cada mes donde por medio de una sesión 3 personas exponen sobre cualquier tema en el desarrollo. Donde generalmente intentamos balancear las pláticas en 3 distintos niveles: Novatos, Proficientes y Avanzados. Esto para seguir teniendo atracción no solo por estudiantes o neófitos sino también para atraer a asistentes con experiencia y tener una comunidad más enriquecida.
        </p>
        <h2>Perfil de Asistentes</h2>
        <div className="chart-wrapper">
            <div className="chart">
                <Pie data={data} />
            </div>
        </div>
        <h2>Video de WebDevTalks</h2>
        <center>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/3kLz1Q0myiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        <h2>Venues</h2>
        <p>
            Intentamos rotar el lugar donde se hace el evento, varias empresas y asociaciones nos han ayudado colaborando y proporcionando sus oficinas y espacios para llevar el evento a cabo.
        </p>
        <h2>Planes de patrocinio</h2>
        <p>
            Con el ideal de seguir mejorando la comunidad, WebDevTalks busca patrocinio y ofrece las siguientes modalidades:
        </p>
        <table>
            <thead>
                <td>GOLD</td>
                <td>SILVER</td>
            </thead>
            <tbody>
                <tr>
                    <td>
                        5 minutos durante la sesión mensual (Para hablar de la empresa, promocionar vacantes, workshops, etc).
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        Compartir facebook post y tweets de los patrocinadores (5 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)
                    </td>
                    <td>
                        Compartir facebook post y tweets de los patrocinadores (2 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)
                    </td>
                </tr>
                <tr>
                    <td>
                        Espacio para Booth
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        Promoción durante la campaña de promoción de la sesión mensual en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)
                    </td>
                    <td>
                        Promoción durante la campaña de promoción de la sesión mensual en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)
                    </td>
                </tr>
                <tr>
                    <td>
                        Promoción de su logo durante la sesión mensual.
                    </td>
                    <td>
                        Promoción de su logo durante la sesión mensual.
                    </td>
                </tr>
                <tr>
                    <td>
                        Agradecimiento por redes sociales después del evento del mes como patrocinador <b>Gold</b>.
                    </td>
                    <td>
                        Agradecimiento por redes sociales después del evento del mes como patrocinador <b>Silver</b>.
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Costos de patrocinio</h3>
        <table>
            <thead>
                <td>Patrocinio</td>
                <td>Contribución</td>
            </thead>
            <tbody>
                <tr>
                    <td>Gold</td>
                    <td>$3,450 MXN por 3 meses</td>
                </tr>
                <tr>
                    <td>Silver</td>
                    <td>$2,200 MXN por 3 meses</td>
                </tr>
            </tbody>
        </table>
        <h3>Plan Mensual:</h3>
        <table>
            <thead>
                <td>Patrocinio</td>
                <td>Contribución</td>
            </thead>
            <tbody>
                <tr>
                    <td>Gold</td>
                    <td>$1,300 MXN por mes</td>
                </tr>
                <tr>
                    <td>Silver</td>
                    <td>$850 MXN por mes</td>
                </tr>
            </tbody>
        </table>
        <p>Para cualquier duda o aclaración puede dirigirse a <a href="mailto:contacto@webdevtalks.mx">contacto@webdevtalks.mx</a></p>
      </section>
    </div>
  );
}

export default Sponsorship;
