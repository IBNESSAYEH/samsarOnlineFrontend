import React, { useRef } from 'react';
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';
import { useParams } from 'react-router-dom';
import { SamsarAnnoncContext } from '../../contexts/AnnonceContext/AnnonceContextProvider';
import axiosClient from '../../axios';
import Swal from 'sweetalert2';


const Reserver = () => {

    const {annonces, categories, setCategories} = SamsarAnnoncContext();

    const {id} = useParams();

   
    const dateDebutRef = useRef("");
    const dateFinRef = useRef("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const localDate = new Date();
        if (!dateDebutRef.current.value || new Date(dateDebutRef.current.value) < localDate) {
            alert("Veuillez remplir les champs avec une date ultérieure à la date actuelle.");   
            return;
        }

        if (!dateFinRef.current.value || new Date(dateFinRef.current.value) < new Date(dateDebutRef.current.value)) {
            alert("Veuillez remplir les champs avec une date ultérieure à la date de début.");
            return;
        }
        const data = {   
            date_debut: dateDebutRef.current.value,
            date_fin: dateFinRef.current.value,
            annonce_id: id
        };
    
    try {
        const response = await axiosClient.post('/reservations', data);
        if (response.status === 201) {
           
Swal.fire({
  position: "center",
  icon: "success",
  title: "reservation effectuer avec succes",
  showConfirmButton: false,
  timer: 1500
});
        }else if(response.status == 202){
           
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Cette annonce est déjà réservée pour cette période!",
});
        }
    }catch (error) {
        console.error(error);   

    }
};
    

    return (
        <>
            <Navbar />

         
            <div className="container">
                {/* Display error message if exists */}
              

                {/* Display form if there are annonces */}
          <h3 className='text-center mt-2'>Reserver Votre Prochaine Hébergement </h3>
                    <div className="row flex-wrap-reverse" style={{ backgroundColor: "#d1dfe8", borderStartEndRadius: "4rem", borderEndStartRadius: "4rem",  border: "solid #86a6bb12 3px", margin: "2rem" }}>
                        {/* form column */}
                        <div className="col-md-6 " style={{ height: "100%", overflowX: 'hidden', padding: "2rem", }}>
                            <form method='POST' onSubmit={handleSubmit}  encType="multipart/form-data">
                            
                                    
                                    <div className="mb-3 col-12 ">
                                        <label htmlFor="title" className="form-label">
                                            date debut
                                        </label>
                                        <input type="date" ref={dateDebutRef}  className="form-control announcement_form_input" id="addresse" placeholder="Enter addresse" />
                                    </div>
                                    <div className="mb-3 col-12 ">
                                        <label htmlFor="title" className="form-label">
                                            date fin
                                        </label>
                                        <input type="date" ref={dateFinRef}  className="form-control announcement_form_input" id="addresse" placeholder="Enter addresse" />
                                    </div>

                             
                                <button type="submit" className="btn btn-primary d-block w-100 my-3" style={{ background: "#7200f4", border: 'none' }}>
                                    Reserver
                                </button>
                            </form>
                        </div>
                        {/* form image column */}
                        <div className="col-md-6">
                            <img src="/assets/photos/Flight_Booking.gif" alt="annonce" style={{ borderStartEndRadius: "2rem" }} className="w-100" />
                        </div>
                    </div>
              
            </div>
            <Footer />
                         </>
    );
};

export default Reserver;
