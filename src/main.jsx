import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import routes from './routes/Routes';
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./notification/CartNotification";
import { WishlistProvider } from "./notification/WishListNoti";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <CartProvider>
    <WishlistProvider>
      <RouterProvider router={routes} />
      </WishlistProvider>
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
)
