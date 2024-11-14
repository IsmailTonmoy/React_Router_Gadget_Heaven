import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Dashboard from "../pages/Dashboard";
import Gbox from "../components/Gbox"

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element:<Home/>,
          loader: ()=>fetch('/src/data/categories.json'),
          children:[
            {
              path:"/",
              element:<Gbox/>,
              loader: ()=>fetch('/src/data/gadgets.json'),

            },
            {
              path:"category/:category",
              element:<Gbox/>,
              loader: ()=>fetch('/src/data/gadgets.json'),
            }

            
          ]
        },
        {
          path: "/statistics",
          element:<Statistics/>,
        },
        {
          path: "/dashboard",
          element:<Dashboard/>,
        },
      ],
    },
  ]);

  export default routes