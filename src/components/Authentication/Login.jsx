import React, {useState, useRef, useContext} from 'react';
import axios from "axios"
import AuthContext from '../../contexts/AuthenticationContext/AuthContexts';
import { NavLink } from 'react-router-dom';
import { useUserAuthenticatedContext } from '../../contexts/UserAuthenticatedContext/UserAuthenticatedContextProvider';


const Login = () => {
  // const { } = useUserAuthenticatedContext();
  // destruct AuthContext data
 const { emailInput,passwordInput,emailInputMessage,passwordInputMessage,handleLoginEmailInput,
    handlePasswordInput, handleLoginSubmit, userToken} = useContext(AuthContext)
    
    if (userToken) {
      window.location.href = "/"
    }


  return (
    <main className="register__main row justify-content-center align-items-center">
       <section className="row align-items-center flex-column  col-12">
      <img src="/assets/photos/Logo.png" alt="SAmasarOnline Logo" className="mb-2 text-center  align-self-center " style={{ width: '15vw' }}/>
      <h2 className="section__about__header fs-4 fw-bold  col-12 col-lg-6 text-center lh-lg">
          Discover extraordinary places and embark on unforgettable journeys <br />  
          <span className="text-center">Your next adventure starts here.....</span>
          </h2> 

      </section>
      <section className="register__main__fromSection col-11 col-lg-6">
        <div className="main__login__fromSection__form">
          <form className="register__form row " method='POST' onSubmit={handleLoginSubmit}>
           
            <div className="register__form__group col-12 col-md-12 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputEmail1" className="register__form__label">Email address :</label>
                <input type="email" ref={emailInput} onChange={handleLoginEmailInput}  className="login__form__control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                {emailInputMessage && ( <small className='text-danger'>{emailInputMessage}</small> )}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputPassword1" className="register__form__label">Password :</label>
                <input type="password" ref={passwordInput} onChange={handlePasswordInput}  className="login__form__control" id="exampleInputPassword1" placeholder="Enter your password" />
                {passwordInputMessage.length > 0 && (
      <ul>
        {passwordInputMessage.map((element, i) => (
          <li key={i} className='text-danger'>{element}</li>
        ))}
      </ul>
    )}
              </div>
              
            </div>
           
            <button type="submit" name="submit" className="register__form__btn ">Submit</button>
          </form>
          <p className='mt-2'>if you don't have an account : <NavLink to="/register" className='text-success'>Register</NavLink></p>
        </div>
      </section>
    </main>
  );
}

export default Login;
