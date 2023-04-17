import { useSurvey } from '../../hooks/useSurvey'

function NavBar() {
  const { openSurvey } = useSurvey()

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sponsorship">¿Te interesa patrocinar?</a>
        </li>
        <li>
          <a href="/" onClick={openSurvey}>Survey</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar