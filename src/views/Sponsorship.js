import logo from '../assets/images/logo.png';
import NavBar from '../components/NavBar';
import { useTranslation } from 'react-i18next';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Sponsorship() {
    const { t } = useTranslation();

    const data = {
        labels: [t("sponsorship.areas",'Otras areas'), 'Software', 'PM', 'QA', t("sponsorship.design",'Diseño'), t("sponsorship.students",'Estudiantes')],
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


    return (
        <div className="sponsorship">
        <NavBar selected="sponsorship" />
        <div className="logo-wrapper">
            <img src={logo} className="logo" alt="Logo WDT" />
        </div>
        <section>
            <p>
                {t("sponsorship.description1","WebDevTalks es una comunidad de desarrollo y tecnología, que inició hace más de 10 años con la finalidad de acercar desarrolladores a diversos temas dentro del área del desarrollo de software, web, móvil, IoT, manejo de proyectos, diseño y más.")}
            </p>
            <p>
                {t("sponsorship.description2","Gracias al esfuerzo y apoyo de diversas empresas hemos podido llegar hasta el día de hoy, proporcionando un evento de calidad, ayudando a incentivar a las nuevas generaciones y fortalecer la comunidad de desarrollo en la ciudad de Colima.")}
            </p>
            <p>
                {t("sponsorship.description3","El evento se lleva a cabo en el último miércoles de cada dos meses donde por medio de una sesión 3 personas exponen sobre cualquier tema en el desarrollo. Donde generalmente intentamos balancear las pláticas en 3 distintos niveles: Novatos, Proficientes y Avanzados. Esto para seguir teniendo atracción no solo por estudiantes o neófitos sino también para atraer a asistentes con experiencia y tener una comunidad más enriquecida.")}
            </p>
            <h2>{t("sponsorship.attendeesTitle","Perfil de Asistentes")}</h2>
            <div className="chart-wrapper">
                <div className="chart">
                    <Pie data={data} />
                </div>
            </div>
            <h2>{t("sponsorship.wdtVideo","Video de WebDevTalks")}</h2>
            <center>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/3kLz1Q0myiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
            <h2>Venues</h2>
            <p>
                {t("sponsorship.venues","Intentamos rotar el lugar donde se hace el evento, varias empresas y asociaciones nos han ayudado colaborando y proporcionando sus oficinas y espacios para llevar el evento a cabo.")}
            </p>
            <h2>{t("sponsorship.sponsorshipPlans","Planes de patrocinio")}</h2>
            <p>
                {t("sponsorship.sponsorshipPlansBody","Con el ideal de seguir mejorando la comunidad, WebDevTalks busca patrocinio y ofrece las siguientes modalidades:")}
            </p>
            <table>
                <thead>
                    <td>GOLD</td>
                    <td>SILVER</td>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold1","5 minutos durante la sesión bimestral (Para hablar de la empresa, promocionar vacantes, workshops, etc).")}
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold2","Compartir FB/IG posts y tweets de los patrocinadores (5 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)")}
                        </td>
                        <td>
                            {t("sponsorship.sponsorshipSilver1","Compartir FB/IG posts y tweets de los patrocinadores (2 shares/retweets), lo cual incluye: (Vacantes lanzadas en redes sociales, Talleres y Cursos, Noticias)")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold3","Espacio para Booth en el lugar")}
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold4","Promoción durante la campaña de promoción de la sesión bimestral en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)")}
                        </td>
                        <td>
                            {t("sponsorship.sponsorshipGold4","Promoción durante la campaña de promoción de la sesión bimestral en las redes sociales de WebDevTalks. (Facebook, Twitter, Instagram, Linkedin)")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold5","Promoción de su logo durante la sesión bimestral.")}
                        </td>
                        <td>
                            {t("sponsorship.sponsorshipGold5","Promoción de su logo durante la sesión bimestral.")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {t("sponsorship.sponsorshipGold6", { level: "Gold" }, "Agradecimiento por redes sociales después del evento bimestral como patrocinador")}.
                        </td>
                        <td>
                            {t("sponsorship.sponsorshipGold6",{ level: "Silver" }, "Agradecimiento por redes sociales después del evento bimestral como patrocinador")}.
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>{t("sponsorship.costs","Costos de patrocinio")}</h3>
            <table>
                <thead>
                    <td>{t("sponsorship.sponsor","Patrocinio")}</td>
                    <td>{t("sponsorship.contribution","Contribución")}</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Gold</td>
                        <td>{t("sponsorship.gold3sesionsCost",{ dolar: "$250 USD", peso: "$3,500 MXN" }, "$3,500 MXN por 3 eventos")}</td>
                    </tr>
                    <tr>
                        <td>Silver</td>
                        <td>{t("sponsorship.silver3sesionsCost",{ dolar: "$150 USD", peso: "$2,500 MXN" }, "$2,500 MXN por 3 eventos")}</td>
                    </tr>
                </tbody>
            </table>
            <h3>{t("sponsorship.monthlyPlan","Pago por evento:")}</h3>
            <table>
                <thead>
                    <td>{t("sponsorship.sponsor","Patrocinio")}</td>
                    <td>{t("sponsorship.contribution","Contribución")}</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Gold</td>
                        <td>{t("sponsorship.goldSesionCost",{ dolar: "$100 USD", peso: "$1,500 MXN" }, "$1,500 MXN por evento")}</td>
                    </tr>
                    <tr>
                        <td>Silver</td>
                        <td>{t("sponsorship.silverSesionCost",{ dolar: "$80 USD", peso: "$1,000 MXN" }, "$1,000 MXN por evento")}</td>
                    </tr>
                </tbody>
            </table>
            <p>{t("sponsorship.contact","Para cualquier duda o aclaración puede dirigirse a")} <a href="mailto:contacto@webdevtalks.mx">contacto@webdevtalks.mx</a></p>
        </section>
        </div>
    );
}

export default Sponsorship;
