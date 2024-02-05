import React from "react";

const CardCars = ({ car }) => {
  return (
<div className="flex my-5">
  <div className="flex" class="flex min-h-screen items-center justify-center">
    <div class="px-5 flex flex-wrap justify-center">
      <div class="max-w-xs mx-2 my-2 cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <img
          class="w-full rounded-lg object-cover object-center"
          src={car.image}
          alt={car.name}
          width={200}
          height={200}
        />
        <div>
          <div class="my-6 flex items-center justify-between px-4">
            <p class="font-bold text-gray-500">{car.name}</p>
            <p class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
              ${car.price}
            </p>
          </div>
          <div class="my-4 flex items-center justify-between px-4">
            <p class="text-sm font-semibold text-gray-500">{car.brand}</p>
            <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              23
            </p>
          </div>
          <div class="my-4 flex items-center justify-between px-4">
            <p class="text-sm font-semibold text-gray-500">Price</p>
            <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              ${car.price}
            </p>
          </div>
          <div class="my-4 flex items-center justify-between px-4">
            <p class="text-sm font-semibold text-gray-500">Third option</p>
            <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              1
            </p>
          </div>
          <div class="my-4 flex items-center justify-between px-4">
            <p class="text-sm font-semibold text-gray-500">Fourth option</p>
            <p class="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              23
            </p>
          </div>
        </div>
      </div>
  </div>
</div>

</div>
  );
};

export default CardCars;
