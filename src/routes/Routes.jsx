import {createBrowserRouter} from "react-router-dom";
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Dashboard from "../pages/Dashboard";
import Gbox from "../components/Gbox";
import GadgetDetails from "../pages/GadgetDetails";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Error from "../pages/Error";
import About from "../pages/About"
const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
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
          children:[
            {
              path:'cart',
              element:<Cart/>
            },
            {
              path:'wishlist',
              element:<WishList/>
            }
  
          ]
        },
        {
          path:"gadgets/:product_id",
          element:<GadgetDetails/>,
          loader: ()=>fetch('/src/data/gadgets.json'),
  
        },
        {
          path: 'about', 
          element: <About/>
        },
      ],
    },
  ]);

  export default routes