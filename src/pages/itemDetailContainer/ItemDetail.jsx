import { CounterContainer } from "../../../src/components/Counter/CounterContainer";
import "./itemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <img src={item.img} alt="Imagen del producto" />
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        <h4>{item.price}</h4>

        <CounterContainer />
      </div>
    </>
  );
};