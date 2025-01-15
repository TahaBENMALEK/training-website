import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Workshops from './pages/Workshops.jsx';
import Community from './pages/Community.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Training from './pages/Training.jsx';
import Nutrition from './pages/Nutrition.jsx';
import Stories from './pages/Stories.jsx';
import Create_story from './pages/Create_story.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Workshops",
        element: <Workshops/>,
      },
      {
        path: "/training",
        element: <Training/>,
      },
      {
        path: "/nutrition",
        element: <Nutrition/>,
      },
      {
        path: "/community",
        element: <Community/>,
      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Profile",
        element: <Profile/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
      {
        path: "/Stories",
        element: <stories/>,
      },
      {
        path: "/Create_story",
        element: <create_story/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)