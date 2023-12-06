import NavBar from '../components/NavBar';
import image1 from '../assets/images/78743416_2588340067930838_9025297886149083136_n.jpeg';
import image2 from '../assets/images/28378086_1616056785159176_862979226448649839_n.jpeg';
import image3 from '../assets/images/88950387_2784083098356533_6828161491334594560_n.jpeg';
import image4 from '../assets/images/87738062_2784085668356276_3167127129091473408_n.jpeg';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <NavBar selected="about" />

      <section>
        <h1 className="text-centered">Web Dev Talks</h1>
        <p>
          {t("aboutUs.quote","“Desde tiempos ancestrales la sociedad ha funcionado como una especie social. Hemos tenido la capacidad de organizarnos en grupos dependiendo de nuestros objetivos e intereses. Así que una comunidad no es algo nuevo, pero sí algo que hoy deberíamos considerar para un crecimiento con mayor potencial.” - Adriana Reyes")}
        </p>
        <img src={image1} alt="" width="100%" />
        <h2 className="text-centered">¿Qué y quiénes son Web Dev Talks?</h2>
        <p>
          Web Dev Talks también conocida como WDT es una comunidad colimense principalmente enfocada en desarrollo web la cual no pertenece a ninguna empresa, somos la primer comunidad de desarrolladores de software en el estado y también la más diversa con 9 años de trayectoria que nos respaldan.
        </p>
        <p>
          Está y ha sido conformada a lo largo de su historia por personas de diferentes empresas para mantenerse neutral en las decisiones que se toman de manera interna.
        </p>
        <h2 className="text-centered">Nuestra motivación</h2>
        <p>
          WDT nació a partir de una idea romántica de varios programadores que soñaban con tener un espacio neutral para hacer networking al menos una vez al mes y aprender algo nuevo de personas que no fueran precisamente sus compañeros de trabajo ya que existen diferentes áreas y empresas con rubros distintos, a veces otro enfoque o tecnología nos puede ayudar a resolver retos de nuestro trabajo del día a día. Incluso podemos dar con la persona indicada para ayudarnos con dichos retos, en algunas ocasiones esto puede derivar en relaciones laborales de largo plazo.
        </p>
        <p>
          Parte de la motivación de la comunidad también se planteó para reducir ciertas carencias de espacios para compartir y aprender de gente que ya labora en la industria del software. Antes de la existencia de nuestra comunidad era complicado encontrar más personas del mismo nicho reunidas en algún lugar que no fuera gente de la misma oficina. Así que para los estudiantes colima sin conocidos egresados de áreas de desarrollo de software era aún más difícil saber qué les podía deparar en el futuro, cuáles eran las oportunidades laborales vigentes o las áreas en las cuales se deberían enfocar para satisfacer las necesidades de las empresas locales y tener más oportunidades de crecimiento. 
        </p>
        <h2 className="text-centered">Dinámica</h2>
        <p>
          Una de las dinámicas preferidas por los asistentes es cambiar de sede cada mes, esto les permite conocer parte de lo que ofrece cada empresa, entre ambiente laboral y estaciones de trabajo, básicamente cada sesión funciona para algunas personas como una especie de visita industrial un poco más informal y sin necesidad de papeleo para lograr conocer las empresas locales.
        </p>
        <div className="twoImages">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <h2 className="text-centered">Beneficio social</h2>
        <p>
          Apoyar a WDT es apoyar socialmente con impacto positivo a las nuevas generaciones de profesionistas quienes son los más beneficiados de este tipo de eventos y tener una fuerte presencia local con lo cual su empresa puede llegar a convertirse en ese objetivo aspiracional para muchas personas.
        </p>
        <h2 className="text-centered">Oferta laboral</h2>
        <p>
          Las empresas y los asistentes se benefician de la oferta laboral ya sea que se enteren de sus vacantes por medio de diapositivas o en el momento del networking mientras conviven con empleados de su empresa (éste segundo medio siendo el más efectivo). Muchas de las personas que de alguna manera han sido parte de nuestra comunidad como asistentes han conocido a sus futuros y actuales empleadores en alguna de nuestras sesiones.
        </p>
        <h2 className="text-centered">Patrocinio</h2>
        <p>
          Seguramente una de las preguntas y tal vez la más importante que se hacen en este momento es ¿Que hacen con el dinero que aportan los patrocinadores? y la respuesta a esta incógnita es: Usamos el dinero de manera íntegra para cubrir únicamente los gastos generados por el evento tales como mobiliario (en caso de necesitarse), comida y bebidas para los asistentes. Todos los otros gastos a la operación del evento quedan totalmente fuera de ese presupuesto, el staff no toca el dinero del patrocinio ni siquiera para gastos de traslado, inclusive algunas veces llegan a patrocinar parte del evento cuando las empresas que nos apoyan son pocas, así sin que nadie lo sepa con tal de que las sesiones se realicen con normalidad, por eso es tan importante su apoyo para mantener vivo a este proyecto.
        </p>
        <h2 className="text-centered">¿Qué ofrecemos a cambio?</h2>
        <p>
          Los patrocinadores tienen derecho a:
        </p>
        <ol>
          <li>Menciones en redes sociales.</li>
          <li>Posts desde la página de la comunidad.</li>
          <li>Compartir cierta cantidad de publicaciones en twitter y facebook.</li>
          <li>Espacio de 5 minutos cada sesión para promover vacantes, eventos, etc.</li>
          <li>Presencia al inicio y al final del evento así como en todos los flyers relativos a la sesión del mensual.</li>
        </ol>
        <p>
          <b>NOTA:</b> Con el tiempo hemos notado que los beneficios a raíz del patrocinio son aún más efectivos cuando individuos (empleados) de las empresas también se involucran como parte de WDT ya que su mensaje llega de manera más orgánica.
        </p>
        <p>
          Para finalizar quisiéramos expresar que nos daría mucho gusto contar con ustedes ya que son una de las empresas más icónicas del estado 💙
        </p>
        <h3 className="text-centered">“Somos comunidad”</h3>
        <img src={image4} alt="" width="100%" />
      </section>
    </div>
  );
}

export default About;
