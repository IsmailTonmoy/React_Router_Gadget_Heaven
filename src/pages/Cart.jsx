import { FaSortAmountDown } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

export default function CartPage() {
  
  return (
    <>
    <Helmet>
        <title>Cart</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <div className="mt-2">
        <Toaster />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold">Cart</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold">Total Cost: ${totalPrice}</h1>

            <div onClick={sortCartByPriceDesc} className="btn btn-outline flex items-center gap-2 border border-purple-600 rounded-3xl text-purple-600 p-2 ">
              <button >Sort by Price</button>
              <FaSortAmountDown />
        </div>
    </div>
  </div>
</div>
            
            
    </>
  );
}
