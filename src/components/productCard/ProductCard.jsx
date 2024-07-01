import { Link } from "react-router-dom";

export const ProductCard = ({ title, price, img, categorie, id }) => {
  return (
    <div>
      <h1> {title} </h1>
      <img src= {img} alt="imagen del producto" />
      <h2> {price} </h2>
      <h3> {categorie} </h3>
      <Link to={`"/itemDetail/${id}"`}> Ver más </Link>
    </div>
  );
};
