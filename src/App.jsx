import "./App.css";
import "./index.css";
import Header from "./component/Header";
// import Main from "./component/Section";
import Products from "./component/Products";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Panier from "./component/Panier";


function App() {
  const [data, setData] = useState([]);

  const FetchData = () => {
    fetch("https://fakestoreapi.com/products?limit=8") 
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="h-screen m-0">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products data={data} />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Panier" element={<Panier />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
