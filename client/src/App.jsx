import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.scss'
import "./pages/layout/layout.scss";
import Homepage from './pages/homepage/Homepage';
import Listpage from './pages/listpage/Listpage';
import {Layout, RequireAuth } from './pages/layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Singlepage from './pages/singlepage/Singlepage';
import Profilepage from './pages/profilePage.jsx/Profilepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProfileUpdatePage from './pages/profileUpdate/ProfileUpdate';
import NewPostPage from './pages/newPost/NewPost';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
      {
        path : "/",
        element: <Homepage/>
      },
      {path : "/list",
        element: <Listpage/>,
        loader: listPageLoader
      },
      {path : "/:id",
        element: <Singlepage/>,
        loader: singlePageLoader
      },
      
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element : <Register/>
      }
    ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [{
          path: "/profile",
          element: <Profilepage/>, 
          loader: profilePageLoader
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage/>
    },
    {
      path: "/add",
      element: <NewPostPage/>
  }

    ]
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
