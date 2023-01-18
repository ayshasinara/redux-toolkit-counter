import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  decreamentByZero,
  increament,
  increamentByAmount,
} from "./redux/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(decreamentByZero())}>reset</button>
      <button onClick={() => dispatch(increament())}>increament</button>
      <button onClick={() => dispatch(decreament())}>decreament</button>
      <button onClick={() => dispatch(increamentByAmount(33))}>
        increament by 33
      </button>
    </div>
  );
}

export default App;
