import React from "react";
import { MdDelete } from "react-icons/md";

const Card2 = ({ increaseQuantity,deleteItem, decreaseQuantity, name, id, price, image, quantity }) => {
    return (
        <div className="w-full flex items-center gap-4  bg-white shadow-md p-2 pb-4 mb-4">

            {/* Food Image */}
            <img
                src={image}
                alt={name}
                className="w-36 h-20 object-cover rounded-md"
            />

            {/* Food Details */}
            <div className="flex-1">

                {/* Name + Delete Icon */}
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">
                        {name}
                    </h3>

                    <MdDelete
                    onClick={()=>deleteItem(id)}
                        className="text-red-500 text-xl cursor-pointer hover:text-red-700"
                    />
                </div>

                {/* Price */}
                <p className="text-green-500 font-medium mt-1">
                    Rs {price}/-
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={() => decreaseQuantity(id)}
                        className="w-6 h-6 border border-green-500 text-green-500 rounded flex justify-center items-center hover:bg-green-500 hover:text-white">
                        -
                    </button>

                    <span className="font-medium">{quantity}</span>

                    <button
                        onClick={() => increaseQuantity(id)}
                        className="w-6 h-6 border border-green-500 text-green-500 rounded flex justify-center items-center hover:bg-green-500 hover:text-white">
                        +
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card2;
