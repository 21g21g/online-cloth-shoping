import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import { ProductData } from "./components/assets/ProductData";

function App() {
  const filteredCatagory = (category) => {
    const fiteredData = ProductData.filter((product) => {
      return product.category.toLowerCase() === category.toLowerCase();
    });
    return fiteredData;
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={
            <ShopCategory
              category="men"
              containCatagory={filteredCatagory("men")}
            />
          }
        />
        <Route
          path="/women"
          element={
            <ShopCategory
              category="female"
              containCatagory={filteredCatagory("female")}
            />
          }
        />
        <Route
          path="/kid"
          element={
            <ShopCategory
              category="kid"
              containCatagory={filteredCatagory("kid")}
            />
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
