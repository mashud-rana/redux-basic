import classes from './Auth.module.css';
import {useDispatch} from 'react-redux'
import {login} from '../store/authSlice'

const Auth = () => {

  const dispatch=useDispatch();

  const tryLogin=(e)=>{
    e.preventDefault();
    dispatch(login());
  }


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={tryLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
