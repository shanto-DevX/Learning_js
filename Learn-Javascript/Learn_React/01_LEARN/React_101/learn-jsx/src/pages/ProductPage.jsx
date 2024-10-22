import React from "react";
import Menu from "../Components/Menu";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { id, name } = useParams();
  return (
    <div>
      <Menu />
      <h1>This Product Page</h1>
      <p>ID:{id}</p>
      <p>Name:{name}</p>
    </div>
  );
};

export default ProductPage;
