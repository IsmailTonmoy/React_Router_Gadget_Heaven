import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import routes from './routes/Routes';
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./notification/CartNotification";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HelmetProvider>
    <CartProvider>
      <RouterProvider router={routes} />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
)
