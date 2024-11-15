import { createContext, useState, useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    const itemExists = wishlistItems.some(wishlistItem => wishlistItem.product_id === item.product_id);
    
    if (itemExists) {
      toast.error("The product is already in the wishlist!");
      return; 
    }

    setWishlistItems((prevItems) => [...prevItems, item]);
    toast.success("The product added to wishlist!");
  };
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.product_id !== id));
    toast.error("The product has been removed from the wishlist!");
  };

  const sortWishlistByPriceDesc = () => {
    setWishlistItems((prevItems) => 
      [...prevItems].sort((a, b) => b.price - a.price)
    );
    toast.success("Product sorted wishlist by price (descending)");
  };

  const resetWishlist = () => {
    setWishlistItems([]);
    toast.success("The wishlist has been reset!");
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, sortWishlistByPriceDesc, resetWishlist }}>
      <Toaster />
      {children}
    </WishlistContext.Provider>
  );
};