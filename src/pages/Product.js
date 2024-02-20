import React from "react";
import { ProductData } from "../components/assets/ProductData";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/productDetail/ProductDetail";
import ProductBar from "../components/productBar/ProductBar";
import Description from "../components/description/Description";
import RelatedProducts from "../components/relatedproducts/RelatedProducts";
const Product = () => {
  const { id } = useParams();
  console.log(id);
  const comingProduct = ProductData.find(
    (product) => product.id === Number(id)
  );
  return (
    <div className="container d-flex flex-column">
      <ProductBar comingProduct={comingProduct} />
      <ProductDetail product={comingProduct} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
