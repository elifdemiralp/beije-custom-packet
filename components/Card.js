import React, { useState } from "react";
import { AiOutlineSync } from "react-icons/ai";

const Card = ({ title, subtitle, imageSrc,  productQuantities, onResetCategory, totalCost}) => {
  const pedPaketleri = ["Standart Ped", "Süper Ped", "Süper+ Ped"];
  const gunlukPedPaketleri = ["Günlük Ped", "Süper Günlük Ped"];
  const tamponPaketleri = ["Mini Tampon", "Standart Tampon"];

  const productsByCategory = {
    "Ped Paketleri": [],
    "Günlük Ped Paketleri": [],
    "Tampon Paketleri": [],
  };

  const productsWithQuantity = productQuantities.filter(
    ([_, quantity]) => quantity > 0
  );

  for (const [productName, quantity] of productsWithQuantity) {
    if (pedPaketleri.includes(productName)) {
      productsByCategory["Ped Paketleri"].push({ productName, quantity });
    } else if (gunlukPedPaketleri.includes(productName)) {
      productsByCategory["Günlük Ped Paketleri"].push({
        productName,
        quantity,
      });
    } else if (tamponPaketleri.includes(productName)) {
      productsByCategory["Tampon Paketleri"].push({ productName, quantity });
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[29rem]">
      <div className="m-8">
        <div className="pb-4">
          <h2 className=" text-3xl font-medium text-gray-900">{title}</h2>
        </div>
        <div className="rounded-md shadow">
          <div>
            <p className=" text-lg text-gray-500 p-3">
              <AiOutlineSync className="inline-block mr-2" />
              {subtitle}
            </p>
          </div>
        </div>
        <div className="relative pt-4">
          <img src={imageSrc} className="object-fill object-cover" />
        </div>
        <div className="">
          {Object.entries(productsByCategory).map(([category, products]) => {
            const productCount = products.length;
            const productList = products.map(
              ({ productName, quantity }) => `${quantity} ${productName}`
            );
            const productText =
              productCount === 1
                ? productList[0]
                : productList
                    .slice(0, -1)
                    .join(productCount === 2 ? " ve " : ", ") +
                  (productCount > 1 ? " ve " : "") +
                  productList[productCount - 1];

            return (
              products.length > 0 && (
                <div key={category} className="rounded-md shadow-md mt-6">
                  <div className="p-4">
                    <p className=" font-semibold text-lg pb-1">{category}</p>
                    <p className=" font-light text-slate-600 text-sm pb-2">
                      {productText}
                    </p>
                    <button onClick={() => onResetCategory(category)} className="text-sm font-semibold text-gray-700 pb-3">
                        Paketten Çıkar
                    </button>
                  </div>
                </div>
              )
            );
          })}
          <div className="pt-8 text-lg flex justify-center items-center w-full text-white">
            <button onClick={() => {}} disabled={totalCost===0} className=" p-2 rounded-2xl bg-[#343131] w-full disabled:bg-gray-200 disabled:text-gray-400">Sepete Ekle (₺{totalCost.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
