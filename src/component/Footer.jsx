import React from 'react'
import styled from 'styled-components';
export default function Footer() {
  return (
    <FOOTER>
        <Copyright>Copyright your website 2024</Copyright>
    </FOOTER>
  )
}


const FOOTER = styled.footer.attrs(()=>({
    className:`w-full h-[10%] bg-gray-800 flex items-center justify-center`,
}))``;


const Copyright = styled.h1.attrs(()=>({
    className:` text-gray-100 text-lg font-semibold `,
}))``;