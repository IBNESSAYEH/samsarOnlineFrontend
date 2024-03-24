import AuthContext from "./AuthContexts";
import { useState, useRef } from "react";
import axios from "axios";
import axiosClient from "../../axios";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN') || "");
    const [currentUser, setCurrentUser] = useState({});
   

   const settingUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token);
    }else{
        localStorage.removeItem('TOKEN');
    }
    setUserToken(token);
    };
    //--------------------------state init------------------------------------
    // inputs references initializing
    const firstNameInput = useRef("");
    const lastNameInput = useRef("");
    const phoneInput = useRef("");
    const emailInput = useRef("");
    const passwordInput = useRef("");
    const confirmPasswordInput = useRef("");

    // inputs messages states initializing
    const [firstNameInputMessage, setFirstNameInputMessage] = useState("");
    const [lastNameInputMessage, setLastNameInputMessage] = useState("");
    const [phoneInputMessage, setPhoneInputMessage] = useState("");
    const [emailInputMessage, setEmailInputMessage] = useState("");
    const [passwordInputMessage, setPasswordInputMessage] = useState([]);
    const [confirmPasswordInputMessage, setConfirmPasswordInputMessage] = useState("");
    //----------------------------handlig inputs----------------------------------------
    const handleFirstNameInput = () => {
        const regex = /^[a-zA-Z]+$/;
        if (!regex.test(firstNameInput.current.value.trim())) {
            setFirstNameInputMessage("First name must contain only letters");
            return false;

        } else if (firstNameInput.current.value.trim().length < 3) {
            setFirstNameInputMessage("First name must be at least 3 characters long");
            return false;
        } else {
            setFirstNameInputMessage("");
            return true;
        }
    }
    const handleLastNameInput = () => {
        const regex = /^[a-zA-Z]+$/;
        if (!regex.test(lastNameInput.current.value.trim())) {
            setLastNameInputMessage("Last name must contain only letters");
            return false;
        } else if (lastNameInput.current.value.trim().length < 3) {
            setLastNameInputMessage("Last name must be at least 3 characters long");
            return false;
        } else {
            setLastNameInputMessage("");
            return true;
        }
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\+?[0-9\s-()]{7,}$/;
        return phoneRegex.test(phone);
    };
    const handlePhoneInput = () => {
        if (!validatePhoneNumber(phoneInput.current.value.trim())) {
            setPhoneInputMessage('the phone number must be like this format +212 610703593')
            return false;
        } else {
            setPhoneInputMessage('');
            return true;
        }

    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // hendle register email
    const handleRegisterEmailInput = () => {
        if (validateEmail(emailInput.current.value.trim())) {
            setEmailInputMessage("");
            return true;
        } else if (firstNameInput.current.value.trim().length > 2 && lastNameInput.current.value.trim().length > 2) {
            setEmailInputMessage(`the email must be like  ${firstNameInput.current.value.trim()}x${lastNameInput.current.value.trim()}@gmail.com`)
            return false;
        } else {
            setEmailInputMessage(`the email must be like ahmedibnali123@gmail.com`)
            return false;
        }

    }

    //   handle login email
    const handleLoginEmailInput = () => {
        if (validateEmail(emailInput.current.value.trim())) {
            setEmailInputMessage("");
            return true;
        } else {
            setEmailInputMessage(`the email must be like ahmedibnali123@gmail.com`)
            return false;
        }

    }
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };


    const handlePasswordInput = () => {
        if (!validatePassword(passwordInput.current.value.trim())) {
            setPasswordInputMessage([
                "Contains at least one lowercase letter.",
                "Contains at least one uppercase letter.",
                "Contains at least one digit.",
                "Contains at least one special character (#&@$)",
                "Has a minimum length of 8 characters."
            ]);
            return false;
        } else {
            setPasswordInputMessage([]);
            return true;
        }
    }

    const handleConfirmPasswordInput = () => {
        const password = passwordInput.current.value.trim();
        const confirmPassword = confirmPasswordInput.current.value.trim();

        if (confirmPassword !== password) {
            setConfirmPasswordInputMessage("Passwords do not match");
            return false;
        } else {
            setConfirmPasswordInputMessage("");
            return true;
        }
    }



    // handle register form submit

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if all fields are valid before submission
        if (handleFirstNameInput() && handleLastNameInput() && handlePhoneInput() && handleLoginEmailInput() && handlePasswordInput() && handleConfirmPasswordInput()) {
            const formData = {
                first_name: firstNameInput.current.value,
                last_name: lastNameInput.current.value,
                phone: phoneInput.current.value,
                email: emailInput.current.value,
                password: passwordInput.current.value,
            };

            try {
                const response = await axiosClient.post("/register", formData);

                if (response.status === 200) {
                    alert(response.data.message);
                } else if (response.status === 422) {
                    // Display validation errors
                    const errorMessages = Object.values(response.data.error).join('\n');
                    alert(errorMessages);
                }
                window.location.href = '/login';
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 500) {
                        alert("Email already exists. Please use a different email.");
                    } else {
                        const errorMessages = Object.values(error.response.data.error).join('\n');

                        alert(errorMessages + '\n' + "try again and respect the messages bellow rhe inputs !");
                    }
                } else {
                    alert("try again and respect the messages bellow rhe inputs !");
                }
            }
        } else {
            alert("Please correct the errors and try again!!");
        }
    };

    // handle login form submit
// handle login form submit
const handleLoginSubmit = async (event) => {
    event.preventDefault();
  
    // Check if all fields are valid before submission
    if (!handleLoginEmailInput() || !handlePasswordInput()) {
      alert("Please correct the errors and try again!!");
      return;
    }
  
    const formData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
  
    try {
      // Get CSRF token from Laravel backend
      const csrfResponse = await axiosClient.get('/csrf-token');
      const csrfToken = csrfResponse.data.csrfToken;
  
      // Include CSRF token in headers of POST request
      const response = await axiosClient.post("/login", formData, {
       
      });
  
 
      // Handle response
      handleResponse(response);
      window.location.href = '/';
    } catch (error) {
      // Handle error
      handleError(error);
    }
  };
  
  // Handle server response
  const handleResponse = (response) => {
    switch (response.status) {
      case 200:
       
   
        setCurrentUser(response.data.user);
          settingUserToken(response.data.token);
        break;
      case 422:
        const errorMessages = Object.values(response.data.errors).join('\n');
        alert(errorMessages);
        break;
      default:
        alert("An unexpected error occurred. Please try again later.");
    }
  };
  
  // Handle error
  const handleError = (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert(error.response.data.error);
          break;
        default:
          alert("An error occurred. Please try again later.");
      }
    } else {
      alert("Network error. Please check your internet connection.");
    }
  };





  const logout = (e) => {
    e.preventDefault();
    axiosClient.post('/logout').then((response) => {
        if (response.status === 200) {
            settingUserToken(null);
           localStorage.removeItem('currentUser');
            window.location.href = '/login';
        }
        })
        };

    return (
        <AuthContext.Provider value={{
            firstNameInput,
            lastNameInput,
            phoneInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
            firstNameInputMessage,
            lastNameInputMessage,
            phoneInputMessage,
            emailInputMessage,
            passwordInputMessage,
            confirmPasswordInputMessage,
            handleFirstNameInput,
            handleLastNameInput,
            handlePhoneInput,
            handleLoginEmailInput,
            handleRegisterEmailInput,
            handlePasswordInput,
            handleConfirmPasswordInput,
            handleSubmit,
            handleLoginSubmit,
            userToken,
            setUserToken,
            logout,
            currentUser,
            setCurrentUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider