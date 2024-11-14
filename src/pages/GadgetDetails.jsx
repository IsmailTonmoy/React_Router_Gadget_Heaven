
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";

export default function DetailsPage() {
 
  return (
    <div>
      <Helmet>
        <title>Details</title>
        <link rel="icon" type="image/png" href="/public/assets/favicon-16x16.png" />
      </Helmet>
      <Toaster />
      <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl relative s">
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold ">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      
    </div>
                
   
  );
}
