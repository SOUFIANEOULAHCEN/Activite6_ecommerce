import styled from "styled-components";
import Main from "./Section";
import { useState } from "react";

export default function Products(props) {
  const [Panel, SetPanel] = useState([]);

  function AddProductPanel(id) {
    const productToAdd = props.data.find((product, index) => index === id);
    // const productToAdd = props.data[id];
    if (productToAdd) {
      const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];
      
      const updatedProducts = [...existingProducts, productToAdd];
      SetPanel(updatedProducts);
      localStorage.setItem("cart", JSON.stringify(Panel));

    }
  }


  return (
    <>
      <Main />
      <ProductContainer>
        {props.data.map((pro, id) => (
          <Card key={id}>
            <img
              src={pro.image}
              className="h-[50%] w-full object-cover rounded-t-xl filter brightness-80"
              alt={`Image of ${pro.title}`}
            />
            <ProductName>
              {pro.title.slice(0, 30)}...
            </ProductName>
            <ProductPrice>{pro.price} $</ProductPrice>
            <AddToCard onClick={() => AddProductPanel(id)}>Add To Cart</AddToCard>
          </Card>
        ))}
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.section.attrs(() => ({
  className: `w-full h-auto grid grid-cols-[repeat(4,1fr)] gap-8 items-center px-[5%] py-[2%]`,
}))``;

const Card = styled.div.attrs(() => ({
  className: `w-full flex flex-col items-center h-[300px] bg-gray-50 shadow-lg rounded-xl`,
}))``;

const ProductName = styled.h1.attrs(() => ({
  className: `text-center mt-4 text-lg font-semibold`,
}))``;

const ProductPrice = styled.h1.attrs(() => ({
  className: `text-center mt-4 text-xl font-semibold`,
}))``;

const AddToCard = styled.button.attrs(() => ({
  className: `border-2 border-gray-400 w-[80%] py-1 rounded-lg mt-3 hover:bg-gray-400 hover:text-gray-100 duration-500`,
}))``;
