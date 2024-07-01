import CounterContainer from "../../components/Counter/CounterContainer";

export const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <h2>{item.title}</h2>
        <CounterContainer />
      </div>
    </>
  );
};