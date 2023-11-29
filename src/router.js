import { createHashRouter, createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Sponsorship from "./views/Sponsorship";
import About from './views/About';
import { Survey } from './components/Survey'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/sponsorship',
    element: <Sponsorship />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/survey',
    element: <Survey />
  }
]);

export default router;