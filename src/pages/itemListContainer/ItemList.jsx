import { products } from "../../products";
import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((element) => {
        return (
          <ProductCard
            key={element.id}
            title={element.title}
            price={element.price}
            img={element.img}
            categorie={element.categorie}
          />
        );
      })}
    </div>
  );
};
