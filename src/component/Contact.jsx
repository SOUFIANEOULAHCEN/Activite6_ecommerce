import styled from "styled-components";

const CONTACT = styled.div.attrs(() => ({
  className: `bg-gray-50 w-full  h-[81vh] flex items-center justify-center`,
}))``;

const DIV = styled.div.attrs(() => ({
  className: `border w-[70%] h-auto bg-white shadow-lg flex flex-col px-6 py-4 gap-6`,
}))``;

export default function Contact() {
  return (
    <CONTACT>
      <DIV>
        <h1 className="text-center text-4xl font-semibold">Contact Us</h1>
        <input
          type="email"
          className="border border-gray-300 rounded-lg px-6 py-3"
          placeholder="Enter Email"
        />
        <textarea
          name="msg"
          id="msg"
          className="rounded-lg border border-gray-300 py-4 px-6"
          placeholder="Enter your message"
        ></textarea>
        <button className="duration-500 bg-gray-950 text-gray-100 py-3 rounded-lg mt-5 hover:bg-gray-900">
          Send
        </button>
      </DIV>
    </CONTACT>
  );
}
