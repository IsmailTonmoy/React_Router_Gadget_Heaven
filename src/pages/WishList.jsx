import { Helmet } from "react-helmet-async";
import GadgetWishList from "../components/GadgetWishList";
import { useWishlist } from "../notification/WishListNoti";

export default function WishList(){
    const{wishlistItems} = useWishlist()
    return (
       <div>
         <Helmet>
        <title>Wishlist</title>
        <link rel="icon" type="image/png" href="/src/picture/favicon-16x16.png" />
      </Helmet>
         <div>
        {wishlistItems?.map((item) => (
          <GadgetWishList key={crypto.randomUUID()} item={item} />
        ))}
      </div>
       </div>
    );
}