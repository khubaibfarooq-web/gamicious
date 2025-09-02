import Home from "../pages/Home";
import Games from "../pages/Games";
import GameDetail from "../pages/GameDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Layout from "../layouts/mainLayout";

// Define route config
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "games", element: <Games /> },
      { path: "games/:id", element: <GameDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];

export default routes;
