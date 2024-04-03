import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import axiosClient from "../../axios";
import Swal from "sweetalert2";
// import { Redirect } from 'react-router-dom';


const AnnonceContext = createContext({});

export const AnnonceContextProvider = ({ children }) => {
   const  [annonces, setAnnonces] = useState([]);

   const [error, setError] = useState(false);

   const getAnnonce = async () => {
    try {
      const response = await axiosClient.get("/annonces")  .then(res => {
    
        setAnnonces(res.data);
      })  
    } catch (error) {
      console.error(error);
    }
  }





let title = useRef();
let description = useRef();
let price = useRef();
let category = useRef();
let type = useRef();
let city_id = useRef();
let image = useRef();
let addresse = useRef();
let email = useRef();
let month_price = useRef();
let week_price = useRef();
let day_price = useRef();
let hour_price = useRef();
let phone = useRef();
let status = useRef();
let jardin = useRef();
let etage = useRef();
let surface = useRef();
let number_rooms = useRef();
let number_salle_bain = useRef();
let number_salle = useRef();
let balcon = useRef();
let terrasse = useRef();
let piscine = useRef();
let parking = useRef();
let assenceur = useRef();



const [categories, setCategories] = useState([]);
const [types, setTypes] = useState([]);
const [cities, setCities] = useState([]);

  const validationAnnonceForm = () => {
    if (title.current.value === "" || description.current.value === "" || price.current.value === "" || category.current.value === "" || type.current.value === "" || city_id.current.value === "" || image.current.files[0] === "" || addresse.current.value === "" || email.current.value === "" || month_price.current.value === "" || week_price.current.value === "" || day_price.current.value === "" || hour_price.current.value === "" || phone.current.value === "" || status.current.value === "" || jardin.current.value === "" || etage.current.value === "" || surface.current.value === "" || number_rooms.current.value === "" || number_salle_bain.current.value === "" || number_salle.current.value === "") {
      setError("All fields are required");
      return;
  }
  if (category.current.value === "0" || type.current.value === "0" || city_id.current.value === "0") {
      setError("Please select a category, type and city");
      return;
  }
  if (phone.current.value.length <= 10) {
      setError("Phone number should be at least 10 digits");
      return;
  }
  if (price.current.value < 0 || month_price.current.value < 0 || week_price.current.value < 0 || day_price.current.value < 0 || hour_price.current.value < 0) {
      setError("Price should be a positive number");
      return;
  }
  
  if (month_price.current.value === 0 && week_price.current.value === 0 && day_price.current.value === 0 && hour_price.current.value === 0) {
      setError("Please select a price type");
      return;
  }
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email.current.value)) {
      setError("Please enter a valid email address");
      return;
  }
  
  
  if (balcon.current.checked == false) {
      balcon.current.value = 0;
  }
  if (terrasse.current.checked == false) {
      terrasse.current.value = 0;
  }
  if (piscine.current.checked == false) {
      piscine.current.value = 0;
  }
  if (parking.current.checked == false) {
      parking.current.value = 0;
  }
  if (assenceur.current.checked == false) {
      assenceur.current.value = 0;
  }
  if (jardin.current.checked == false) {
      jardin.current.value = 0;
  }
  
  if (balcon.current.checked == true) {
      balcon.current.value = 1;
  }
  if (terrasse.current.checked == true) {
      terrasse.current.value = 1;
  }
  if (piscine.current.checked == true) {
      piscine.current.value = 1;
  }
  if (parking.current.checked == true) {
      parking.current.value = 1;
  }
  if (assenceur.current.checked == true) {
      assenceur.current.value = 1;
  }
  if (jardin.current.checked == true) {
      jardin.current.value = 1;
  }
  
return error;
  }


  const getCities = async () => {
    try {
        const response = await axiosClient.get("/cities");
        setCities(response.data);
    } catch (error) {
        console.log(error);
    }
};

const getAnnonceTypes = async () => {
  try {
      const response = await axiosClient.get("/types");
      
      setTypes(response.data);
  } catch (error) {
      console.log(error);
  }
};

const getCategories = async () => {
  try {
      const response = await axiosClient.get("/categories");
      setCategories(response.data);
  } catch (error) {
      console.log(error);
  }
};

const deleteAnnonce =  (id) => {
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await axiosClient.delete(`/annonces/${id}`);
                if (response.status === 200) {
                    setAnnonces(annonces.filter(annonce => annonce.id !== id));
                    console.log("Annonce deleted successfully");
                }
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }else{
              Swal.fire({
                title: "Cancelled",
                text: "Your file is safe :)",
                icon: "error"
              });
            }
          });
     
       
    } catch (error) {
        console.log(error);
    }
    }



    const [currentUser, setCurrentUser] = useState(null);

const getCurrentUSer = async() => {
    try {
        const response = await axiosClient.get("/currentUSer");
       setCurrentUser(response.data);
    } catch (error) {
        console.log(error);
    }
}


    const likeAnnonce = async (id) => {
        getCurrentUSer();
       const data = {
              user_id: currentUser.id,
              review: 1,
             
              annonce_id: id
        }
        try {
            const response = await axiosClient.post(`/reviews`, data);

            if (response.status === 201) {
                // console.log("Annonce liked successfully");
            }

           
        } catch (error) {
            console.log(error);
        }
    }
    const unlikeAnnonce = async (id) => {
 

        try {
            const response = await axiosClient.delete(`/reviews/${id}`);
            if (response.status === 204) {
            //    
            }
        } catch (error) {
            console.log(error);
        }
    }

useEffect(() => {
    getAnnonce();
    getCategories();
    getAnnonceTypes();
    getCities();
    getCurrentUSer();
  }, []);
  return <AnnonceContext.Provider value={{
    annonces, 
    setAnnonces,
    validationAnnonceForm,
    setError,
    error,
 title ,
 description ,
 price ,
 category ,
 type ,
 city_id ,
 image ,
 addresse ,
 email ,
 month_price ,
 week_price ,
 day_price ,
 hour_price ,
 phone ,
 status ,
 jardin ,
 etage ,
 surface ,
 number_rooms ,
 number_salle_bain ,
 number_salle ,
 balcon ,
 terrasse ,
 piscine ,
 parking ,
 assenceur ,
 getCategories,
 getAnnonceTypes,
 getCities,
 cities,
 types,
 categories,
 setCities,
 setCategories,
 setTypes,
getAnnonce,
deleteAnnonce,
likeAnnonce,
unlikeAnnonce,
currentUser


  }}>
    {children}
    </AnnonceContext.Provider>;
}


export const SamsarAnnoncContext = () => useContext(AnnonceContext);