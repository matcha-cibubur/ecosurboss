import { BrowserRouter, Route, Routes } from "react-router";
import ProductCard from "./components/Products";
import ProductPage from "./page/product";

export default function App() {
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProductPage />} />
   </Routes>
  </BrowserRouter>
}