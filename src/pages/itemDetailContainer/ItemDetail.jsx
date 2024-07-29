import { CounterContainer } from "../../../src/components/Counter/CounterContainer";
import "./itemDetail.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div className="containerItemDetail">
        <div>
          <img src={item.img} alt="Imagen del producto" />
        </div>
        <div className="detailItems">
          <h1>{item.title}</h1>
          <h2>$ {item.price}</h2>
          <h3> {item.description} </h3>
          <div className="counterContainer">
            <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
          </div>
        </div>
      </div>
    </>
  );
};
