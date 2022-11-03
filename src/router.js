import { createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Sponsorship from "./views/Sponsorship";
import About from './views/About';

const router = createBrowserRouter([
  {
    path: "/webdevtalks.github.io/",
    element: <Home />,
  },
  {
    path: '/webdevtalks.github.io/sponsorship',
    element: <Sponsorship />
  },
  {
    path: '/webdevtalks.github.io/about',
    element: <About />
  }
]);

export default router;