import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handlePlus();
    }, 2000);

    return () => clearInterval(sliderClear);
  }, [slider]);

  return (
    <>
      <div className="mt-[100px]">
        <div className="w-[90%] mx-auto h-[80vh] my-5 relative">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img
                src={item.url}
                alt=""
                className="w-full h-[80vh] rounded-2xl object-cover"
              />
            </div>
          ))}
          <div className="w-full mx-auto h-[80vh] bg-black opacity-50 rounded-2xl absolute top-0 left-0"></div>
          <div className="absolute w-full top-[50%] text-center text-[20px] md:text-[30px] font-semibold text-white flex justify-center">
          <p className="">welcome to the world of tasty & Fresh food</p>
          </div>
          <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
            <FaChevronLeft
              size={35}
              className="cursor-pointer"
              onClick={handleMinus}
            />
            <FaChevronRight
              size={35}
              className="cursor-pointer"
              onClick={handlePlus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
