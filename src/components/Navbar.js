import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
   <nav>
      <NavLink to="/" exact>GadgetHaven</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/wishlist">Wishlist</NavLink>
   </nav>
);