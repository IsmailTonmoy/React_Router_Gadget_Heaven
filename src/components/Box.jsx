import { Link } from "react-router-dom";

export default function Card({ gadgets }) {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadgets || {};
  console.log(product_image )

  return (
    <div className="card bg-base-100  shadow-xl w-60 lg:w-80">
      <figure className="">
        <img
          className="w-[220px] h-[200px] pt-4"
          src={product_image ? product_image : ""}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <h2 className="card-title">${price}</h2>
        <div className="card-actions justify-start">
          <Link to={`/gadgets/${product_id}`}>
            <button className="btn btn-outline btn-primary rounded-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
