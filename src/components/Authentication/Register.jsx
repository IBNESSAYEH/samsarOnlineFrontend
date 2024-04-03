import React, { useState, useRef, useContext } from 'react';
import axios from "axios"
import AuthContext from '../../contexts/AuthenticationContext/AuthContexts';
import { NavLink } from 'react-router-dom';


const Register = () => {

  // destruct AuthContext data
  const { firstNameInput, lastNameInput, phoneInput, emailInput, passwordInput,roleRef, confirmPasswordInput,
    firstNameInputMessage, lastNameInputMessage, phoneInputMessage, emailInputMessage,
    passwordInputMessage, confirmPasswordInputMessage, handleFirstNameInput, handleLastNameInput,
    handlePhoneInput, handleRegisterEmailInput, handlePasswordInput, handleConfirmPasswordInput,
    handleSubmit } = useContext(AuthContext)



  return (
    <main className="register__main row flex-column  justify-content-center align-items-center">
      <section className="row align-items-center flex-column  col-12">
        <img src="/assets/photos/Logo.png" alt="SAmasarOnline Logo" className="mb-2 text-center  align-self-center " style={{ width: '15vw' }} />
        <h1 className="section__about__header fs-4 fw-bold  col-12 col-lg-6 text-center lh-lg">
          Discover extraordinary places and embark on unforgettable journeys <br />
          <span className="text-center">Your next adventure starts here.....</span>
        </h1>

      </section>
      <section className="register__main__fromSection col-12 col-lg-9">
        <div className="register__main__fromSection__form">
          <form className="register__form row" method='POST' onSubmit={handleSubmit}>
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="first_name" className="register__form__label">First Name :</label>
                <input type="text" ref={firstNameInput} onChange={handleFirstNameInput} className="register__form__control" id="first_name" placeholder="Enter your first name" />
                {firstNameInputMessage && (<small className='text-danger'>{firstNameInputMessage}</small>)}
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="last_name" className="register__form__label">Last Name :</label>
                <input type="text" ref={lastNameInput} onChange={handleLastNameInput} className="register__form__control" id="last_name" placeholder="Enter your last name" />
                {lastNameInputMessage && (<small className='text-danger'>{lastNameInputMessage}</small>)}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="phone" className="register__form__label">Phone :</label>
                <input type="tel" ref={phoneInput} onChange={handlePhoneInput} className="register__form__control" id="phone" placeholder="Enter your phone" />
                {phoneInputMessage && (<small className='text-danger'>{phoneInputMessage}</small>)}

              </div>
            </div>
            <div className="register__form__group col-12 col-md-6 gap-2">
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputEmail1" className="register__form__label">Email address :</label>
                <input type="email" ref={emailInput} onChange={handleRegisterEmailInput} className="register__form__control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                {emailInputMessage && (<small className='text-danger'>{emailInputMessage}</small>)}

              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="exampleInputPassword1" className="register__form__label">Password :</label>
                <input type="password" ref={passwordInput} onChange={handlePasswordInput} className="register__form__control" id="exampleInputPassword1" placeholder="Enter your password" />
                {passwordInputMessage.length > 0 && (
                  <ul>
                    {passwordInputMessage.map((element, i) => (
                      <li key={i} className='text-danger'>{element}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="register__form__group__item mb-3">
                <label htmlFor="confirm" className="register__form__label">Confirm Password :</label>
                <input type="password" ref={confirmPasswordInput} onChange={handleConfirmPasswordInput} className="register__form__control" id="confirm" placeholder="Repeat your password" />
                {confirmPasswordInputMessage && (<small className='text-danger'>{confirmPasswordInputMessage}</small>)}
              </div>
            </div>
            <div className="register__form__group col-12 mb-3">
              <label htmlFor="roleSelect" className="register__form__label">start as a :</label>
              <select ref={roleRef} className="register__form__control" id="roleSelect">
          
                <option value="1">client</option>
                <option value="3">HomeOwner</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button type="submit" name="submit" className="register__form__btn ">Submit</button>
          </form>
          <p className='mt-2'>if you don't have an account : <NavLink to="/login" className='text-success'>Login</NavLink></p>
        </div>
      </section>
    </main>
  );
}

export default Register;
