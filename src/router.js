import { createBrowserRouter } from "react-router-dom";
import Home from './views/Home';
import Sponsorship from "./views/Sponsorship";
import About from './views/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: 'sponsorship',
    element: <Sponsorship />
  },
  {
    path: 'about',
    element: <About />
  }
]);

export default router;