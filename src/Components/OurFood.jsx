import React from "react";
import { mealData } from "../assets/Food materials/data/data";

const OurFood = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-[100px]">
        <div>
          <h2 className="text-center text-[#fbc531] text-3xl font-bold py-5">
            Our Food
          </h2>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2">
          {mealData.map((meal) => (
            <div className="flex justify-center flex-col items-center">
              <div>
                <img
                  src={meal.image}
                  alt=""
                  className="w-[250px] h-[200px] rounded-md object-cover"
                />
              </div>
              <div className="flex justify-center py-2 px-4 flex-col items-center">
                <p className="text-xl font-semibold uppercase">{meal.name}</p>
                <p className="text-xl font-semibold uppercase">{meal.price}</p>
                <button className="bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] font-semibold hover:text-[#fbc531]">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurFood;
