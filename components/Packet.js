import React, { useEffect } from "react";
import { useState } from "react";
import ProductSlider from "./ProductSlider";
import Tabs from "./Tabs";
import Card from "./Card";

export default function CustomPackage() {

  const [standartPedQuantity, setStandatPedQuantity] = useState(0);
  const [superPedQuantity, setSuperPedQuantity] = useState(0);
  const [superPlusPedQuantity, setSuperPlusPedQuantity] = useState(0);

  const [dailyPedQuantity, setDailyPedQuantity] = useState(0);
  const [superDailyPedQuantity, setSuperDailyPedQuantity] = useState(0);

  const [miniTamponQuantity, setMiniTamponQuantity] = useState(0);
  const [standartTamponQuantity, setStandartTamponQuantity] = useState(0);


  const productQuantities = [
    ["Standart Ped", standartPedQuantity],
    ["Süper Ped", superPedQuantity],
    ["Süper+ Ped", superPlusPedQuantity],
    ["Günlük Ped", dailyPedQuantity],
    ["Süper Günlük Ped", superDailyPedQuantity],
    ["Mini Tampon", miniTamponQuantity],
    ["Standart Tampon", standartTamponQuantity],
  ];


  const handleResetCategory = (category) => {
    switch (category) {
      case "Ped Paketleri":
        setStandatPedQuantity(0);
        setSuperPedQuantity(0);
        setSuperPlusPedQuantity(0);
        break;
      case "Günlük Ped Paketleri":
        setDailyPedQuantity(0);
        setSuperDailyPedQuantity(0);
        break;
      case "Tampon Paketleri":
        setMiniTamponQuantity(0);
        setStandartTamponQuantity(0);
        break;
      default:
        break;
    }
  };

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const standartPedPrice = 2.973;
    const superPedPrice = 3.327;
    const superPlusPedPrice = 3.748;
    const dailyPedPrice = 1.972;
    const superDailyPedPrice = 2.092;
    const miniTamponPrice = 3.377;
    const standartTamponPrice = 3.701;
  
    let cost =
      standartPedQuantity * standartPedPrice +
      superPedQuantity * superPedPrice +
      superPlusPedQuantity * superPlusPedPrice +
      dailyPedQuantity * dailyPedPrice +
      superDailyPedQuantity * superDailyPedPrice +
      miniTamponQuantity * miniTamponPrice +
      standartTamponQuantity * standartTamponPrice;
  
    setTotalCost(cost);
  }, [
    standartPedQuantity,
    superPedQuantity,
    superPlusPedQuantity,
    dailyPedQuantity,
    superDailyPedQuantity,
    miniTamponQuantity,
    standartTamponQuantity,
  ]);


  const pedPaketleri = ["Standart Ped", "Süper Ped", "Süper+ Ped"];
  const gunlukPedPaketleri = ["Günlük Ped", "Süper Günlük Ped"];
  const tamponPaketleri = ["Mini Tampon", "Standart Tampon"];

  return (
    <div className="flex flex-row justify-center items-start bg-beije h-max text-black pt-48">
      <div className="m-6 flex justify-end reset-max-width" style={{"maxWidth": "40%"}}>
      <div className="container md:mr-20 reset-max-width" style={{"maxWidth": "90%"}}>

      <div className="flex justify-between mb-4">
  <h1 className="text-3xl font-medium">
    Kendi Paketini Oluştur
  </h1>
  <button className=" font-light text-base">
    Nasıl Çalışır?
  </button>
</div>

        <p className="mb-4 font-light">
        Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.
        </p>
        <div className="mb-4 mt-20">
          <Tabs>
            <div label="beije Ped">
              <ProductSlider productName={"Standart Ped"} value={standartPedQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setStandatPedQuantity(newValue)}/>
              <ProductSlider productName={"Süper Ped"} value={superPedQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setSuperPedQuantity(newValue)}/>
              <ProductSlider productName={"Süper+ Ped"} value={superPlusPedQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setSuperPlusPedQuantity(newValue)}/>
            </div>
            <div label="beije Günlük Ped">
              <ProductSlider productName={"Günlük Ped"}  value={dailyPedQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setDailyPedQuantity(newValue)}/>
              <ProductSlider productName={"Süper Günlük Ped"} value={superDailyPedQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setSuperDailyPedQuantity(newValue)}/>
            </div>
            <div label="beije Tampon">
              <ProductSlider productName={"Mini Tampon"} value={miniTamponQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setMiniTamponQuantity(newValue)}/>
              <ProductSlider productName={"Standart Tampon"} value={standartTamponQuantity} min={0} max={60} step={10} onChange={(event, newValue) => setStandartTamponQuantity(newValue)}/>
            </div>
          </Tabs>
        </div>
      </div>
      </div>
      
      
      <div className="flex justify-start reset-max-width" style={{maxWidth: "50%"}}>
      <div className="p-4  sticky left-0 hidden md:block reset-max-width" style={{maxWid
      : "50%"}}>
      <div className="max-w-lg mx-auto">
      <Card
        title="Özel Paketin"
        subtitle="2 ayda 1 gönderim"
        imageSrc="https://beije.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpacket.c4ec1969.png&w=828&q=75"
        productQuantities={productQuantities}
        onResetCategory={handleResetCategory}
        totalCost={totalCost}
      />
    </div>
      </div>
      </div>
      
      </div>
  );
}
