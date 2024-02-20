import { useCount } from "../../hooks/useCount";

export const Count2 = () => {
  const { count, increment, decrement, reset } = useCount();
  return (
    <div>
      <h3>Count 2</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
