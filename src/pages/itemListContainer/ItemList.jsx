import { ProductCard } from "../../components/productCard/ProductCard";
import "./itemList.css";

export const ItemList = ({ items }) => {
  
  return (
    <div className="itemsDisplayed">
      {items.map((element) => {
        return (
          <ProductCard className="productCard"
            key={element.id}
            title={element.title}
            price={element.price}
            img={element.img}
            category={element.category}
            id={element.id}
          />
        );
      })}
    </div>
  );
};
