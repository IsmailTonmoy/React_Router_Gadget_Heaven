import { Helmet } from "react-helmet-async";

export default function WishList(){
    const{wishlistItems} = useWish()
    return (
       <div>
         <Helmet>
        <title>Wishlist</title>
        <link rel="icon" type="image/png" href="/src/picture/favicon-16x16.png" />
      </Helmet>
         <div>
        {wishlistItems.map((item) => (
          <WishList key={crypto.randomUUID()} item={item} />
        ))}
      </div>
       </div>
    );
}