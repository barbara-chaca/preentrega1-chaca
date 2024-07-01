import { products } from "../../products";
import { ProductCard } from "../../components/productCard/ProductCard";
import "./itemList.css";

export const ItemList = ({ items }) => {
  
  return (
    <div className="itemsDisplayed">
      {items.map((element) => {
        return (
          <ProductCard
            key={element.id}
            title={element.title}
            price={element.price}
            img={element.img}
            categorie={element.categorie}
            id={element.id}
          />
        );
      })}
    </div>
  );
};
