import { useEffect, useState } from "react";
import styled from "styled-components";

const ShoppingList = styled.section.attrs(() => ({
  className: `bg-gray-100 w-full h-[81vh] p-4`,
}))``;

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = () => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(items);

    const initialQuantities = items.reduce((acc, _, index) => {
      acc[index] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  };

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = { ...quantities, [index]: parseInt(value) || 1 };
    setQuantities(updatedQuantities);
  };

  const calculateTotal = () => {
    const total = products.reduce((acc, product, index) => {
      const quantity = quantities[index] || 1;
      return acc + product.price * quantity;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [quantities, products]);

  return (
    <ShoppingList>
      <table className="w-full border border-gray-300 shadow-lg bg-white">
        <thead className="bg-gray-800 text-gray-100">
          <tr className="text- text-xl">
            <th className="py-3 px-4 font-semibold">Product Name</th>
            <th className="py-3 px-4 font-semibold">Price</th>
            <th className="py-3 px-4 font-semibold">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
              <td className="py-2 px-4 text-gray-700">
                {product.title.split("").splice(0, 40)}{"..."} 
              </td>
              <td className="py-2 px-4 text-gray-700">
                {product.price * (quantities[index] || 1)} {" Dh"}
              </td>
              <td className="py-2 px-4 text-gray-700">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={quantities[index] || 1}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  className="text-gray-950 bg-gray-200 px-6 py-2 rounded-xl sm:w-[60%] lg:w-[30%]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-[10%] flex items-center justify-center px-5 bg-gray-950 text-gray-100 mt-5 sm:w-[30%] lg:w-[10%] rounded-lg ">
        Total: {totalPrice.toFixed(2)} Dh
      </div>
    </ShoppingList>
  );
}
