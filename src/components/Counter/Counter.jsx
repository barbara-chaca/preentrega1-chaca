export const Counter = ({ restar, contador, sumar }) => {
    return (
      <div>
        <button onClick={restar}>Sumar</button>
        <h1> {contador} </h1>
        <button onClick={sumar}>Restar</button>
      </div>
    );
};