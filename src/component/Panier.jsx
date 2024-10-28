import { useEffect, useState } from "react";
import styled from "styled-components";

const ShoppinListe = styled.section.attrs(() => ({
  className: `bg-gray-100 w-full h-[81vh] p-4`,
}))``;

export default function Panier() {
  const [ProFromStorage, SetProStorage] = useState([]);
  const [Q, SetQ] = useState({});
  const [SommePrice ,SetSommePrice] = useState();
  const GetItemsFromLocalStock = () => {
    const existingProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(existingProducts);
    SetProStorage(existingProducts);
  };

  const HandleQuantite = (index, value) => {
    const newQuantite = { ...Q, [index]: value };
    SetQ(newQuantite);
  };

  const SommeOfPrices = (price)=>{
    let prevPrices  =0;
    prevPrices+=price;
    SetSommePrice(prevPrices);
  }
  useEffect(() => {
    GetItemsFromLocalStock();
    SommeOfPrices();
  }, [Q]);
  return (
    <ShoppinListe>
      <table className="w-full border border-gray-300 shadow-lg bg-white">
        <thead className="bg-gray-800 text-gray-100">
          <tr className="text- text-xl">
            <th className="py-3 px-4 font-semibold">Product Name</th>
            <th className="py-3 px-4 font-semibold">Price</th>
            <th className="py-3 px-4 font-semibold">Quantite</th>
            <th className="py-3 px-4 font-semibold"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {ProFromStorage.map((pro, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 hover:bg-gray-100"
            >
              <td className="py-2 px-4 text-gray-700">
                {pro.title.split("").splice(0, 30)}
                {"..."}{" "}
              </td>
              <td onChange={(e)=>{SommeOfPrices(e.target.value)}} className="py-2 px-4 text-gray-700">
                {pro.price * Q[index]} {" Dh"} 
              </td>
              <td className="py-2 px-4 text-gray-700">
                <input
                  type="number"
                  min={1}
                  max={100}
                  onChange={(e) => {
                    HandleQuantite(index, e.target.value);
                  }}
                  className="text-gray-950 bg-gray-200 px-6 py-2 rounded-xl sm:w-[60%] lg:w-[30%] "
                />
              </td>
              <td className="py-2 px-4 text-gray-700 flex gap-4 items-center justify-center">
                <button className="border border-red-600 text-red-600 font-semibold px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white duration-500 bg-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      {SommePrice}
      </div>
    </ShoppinListe>
  );
}
