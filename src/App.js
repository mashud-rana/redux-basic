import Counter from "./components/Counter";
import { Provider } from "react-redux";

import Header from './components/Header'
import Auth from './components/Auth'
import Profile from './components/UserProfile'
import {useSelector} from 'react-redux'
import { Fragment } from "react";


function App() {
  const auth=useSelector(state=>state.auth.auth);
  return (
    <Fragment>
      {auth?<Header/>:''}
      {!auth?<Auth/>:<Profile/>}
      <Counter />
      </Fragment>
  );
}

export default App;
