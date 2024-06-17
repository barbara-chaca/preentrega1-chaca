export const ProductCard = ({ title, price, img, categorie }) => {
  return (
    <div>
      <h1> {title} </h1>
      <div> {img} </div>
      <h2> {price} </h2>
      <h3> {categorie} </h3>
    </div>
  );
};
