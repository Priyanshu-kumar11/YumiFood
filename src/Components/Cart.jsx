import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Store/foodSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.food.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="w-[90%] mx-auto mt-[100px]">
      <h2 className="text-center text-[#fbc531] text-3xl font-bold py-5">Your Cart</h2>
      <div className="py-6">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100px] h-[80px] object-cover rounded-md"
                />
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-semibold">{item.price}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
