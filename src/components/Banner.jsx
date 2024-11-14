import ImgBanner from '../picture/banner.jpg'
export default function Banner() {
    return (
      <div className="flex justify-center">
        <div className="relative bottom-20  p-3 border rounded-xl w-6/12">
          <img
            src={ImgBanner}
            alt=""
            className=" text-center object-fill rounded-xl"
          />
        </div>
      </div>
    );
  }