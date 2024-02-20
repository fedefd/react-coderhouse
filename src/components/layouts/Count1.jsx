import { useCount } from "../../hooks/useCount";

export const Count1 = () => {
  const { count, increment, decrement, reset } = useCount(5);

  return (
    <div>
      <h3>Count 1</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
