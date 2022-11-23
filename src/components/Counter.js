import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from '../store/counterSlice'

const Counter = () => {
  const counter = useSelector(state => state.count.counter);
  const dispatch=useDispatch();

  
  const toggleCounterHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
