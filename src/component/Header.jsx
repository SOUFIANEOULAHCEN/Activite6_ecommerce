import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Section = styled.header.attrs(() => ({
  className: `w-full h-[70px] bg-gray-800 shadow-lg flex items-center justify-between px-[10%]`,
}))``;

const DIV = styled.div.attrs(() => ({
  className: `flex items-center justify-center gap-20`,
}))``;

const SPAN = styled.span.attrs((props) => ({
  className: `${props.primary ? "text-3xl" : "text-lg"} 
  ${props.btn ? "text-gray-800" : "text-gray-100"}
  font-bold`,
}))``;

const UL = styled.ul.attrs(() => ({
  className: `inline-flex gap-8`,
}))``;

const LI = styled.li.attrs(() => ({
  className: "text-gray-100 hover:font-semibold",
}))``;

const BUTTON = styled.button.attrs(() => ({
  className: `border-2 bg-gray-400 border-gray-400 px-6 py-1 rounded-lg flex items-center justify-center gap-3 text-gray-800 hover:bg-gray-200 hover:border-gray-400`,
}))``;

function Header() {
  const [length, setLength] = useState();

  const GetLenght = () => {
    const Products = JSON.parse(localStorage.getItem("cart"));
    setLength(Products.length);
  };
  useEffect(() => {
    GetLenght();
  }, []);
  return (
    <Section>
      <DIV>
        <SPAN primary={true}>Store</SPAN>
        <UL>
          <LI>
            <Link to="/">Home </Link>
          </LI>
          <LI>
            <Link to="/Blog">Blog</Link>
          </LI>
          <LI>
            <Link to="/Contact">Contact </Link>
          </LI>
        </UL>
      </DIV>
      <DIV>
        <BUTTON>
          <FaCartShopping />
          <SPAN btn={true}>
            <Link to="/Panier">Card {length} </Link>
          </SPAN>
        </BUTTON>
      </DIV>
    </Section>
  );
}

export default Header;
