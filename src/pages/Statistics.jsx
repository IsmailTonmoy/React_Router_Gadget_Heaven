import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

export default function Statistics() {
  return (
    <>
    <Helmet>
        <title>Statistics</title>
        <link rel="icon" type="image/png" href="/src/picture/favicon-16x16.png" />
      </Helmet>
    <div className="hero bg-[#9538E2] min-h-96 rounded-b-xl relative s">
      <div className="hero-content text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold ">Statistics</h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <p className="py-6">
            Sorry! Statistics are not available at this moment
          </p>
          </div>
        </div>
      </div>
    
      </>

    );
}