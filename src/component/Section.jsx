import styled from "styled-components";
import bgimage from '../img/background-img.jpg';

const Section = styled.section.attrs(() => ({
    className: `w-full relative h-[30%]`, 
}))`
    overflow: hidden; 
`;

const TITLE = styled.h1.attrs(() => ({
    className: `font-bold text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white`,
}))`
    text-shadow: 
        0 0 5px rgba(255, 255, 255, 0.8), 
        0 0 10px rgba(255, 255, 255, 0.7), 
        0 0 40px rgba(214, 218, 218, 0.060);
`;

const BackgroundImage = styled.img.attrs(() => ({
    className: `w-full h-full object-cover filter grayscale`,
}))``;

export default function Main() {
  return (
    <Section>
        <BackgroundImage src={bgimage} alt="Background" />
        <TITLE>WELCOME IN OUR STORE</TITLE>
    </Section>
  );
}
