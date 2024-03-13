import { useEffect, useState } from "react";
import FProduct from "./FProduct";
import './FProducts.css'

const FProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  };

  return (
    <div className="FProducts">
      {products?.map((product) => {
        return <FProduct product={product} key={product.id} />;
      })}
      <FProduct />
    </div>
  );
};

export default FProducts;
