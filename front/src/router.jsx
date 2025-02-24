import {createBrowserRouter} from "react-router-dom";
import Home from "./student/Home";
import Cours from "./student/Cours";
import Credentiels from "./student/Credentiels";
import Project from "./student/Project";
import Notes from "./student/Notes";
import Progress from "./student/Progress";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/cours",
      element: <Cours/>,
    },
    {
      path: "/credentiels",
      element: <Credentiels/>,
    },
    {
      path: "/note",
      element: <Notes/>,
    },
    {
      path: "/projects",
      element: <Project/>,
    },
    {
      path: "/progress",
      element: <Progress/>,
    },
  ]);

  export default router ;