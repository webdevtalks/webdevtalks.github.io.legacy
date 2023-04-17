import { useSurvey } from '../hooks/useSurvey'

export function Survey() {
  const { navigateToSurvey } = useSurvey()

  navigateToSurvey()
}