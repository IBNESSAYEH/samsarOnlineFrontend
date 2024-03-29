import React, { useContext, useEffect, useRef, useState } from "react";
import axiosClient from "../../axios";
import { MdCreateNewFolder } from "react-icons/md";
import AuthContext from "../../contexts/AuthenticationContext/AuthContexts";
import { SamsarAnnoncContext } from "../../contexts/AnnonceContext/AnnonceContextProvider";
import AnnonceFormulaire from "../../layouts/AnnonceFormulaire";
// import { c } from "vite/dist/node/types.d-aGj9QkWt";

const AnnonceCreataForm = () => {

    const { currentUser, setCurrentUser, userToken, setUserToken, logout } = useContext(AuthContext);
    const { annonces, setAnnonces, validationAnnonceForm, setError, error, title, description, price,
        category, type, city_id, image, addresse, email, month_price, week_price, day_price, hour_price,
        phone, status, jardin, etage, surface, number_rooms, number_salle_bain, number_salle, balcon,
        terrasse, piscine, parking, assenceur, getCategories, getAnnonceTypes, getCities, categories,
        getAnnonce,types, cities } = SamsarAnnoncContext();
    // form inpuuts validation and subbmission


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validationAnnonceForm();
        setError(formErrors);

        const AnnonceData = {
            title: title.current.value,
            description: description.current.value,
            price: price.current.value,
            category_id: category.current.value,
            type_id: type.current.value,
            city_id: city_id.current.value,
            user_id: currentUser.id,
            adresse: addresse.current.value,
            email: email.current.value,
            month_price: month_price.current.value,
            week_price: week_price.current.value,
            day_price: day_price.current.value,
            hour_price: hour_price.current.value,
            phone: phone.current.value,
            sataut: status.current.value,
            jardin: jardin.current.value,
            etage: etage.current.value,
            surface: surface.current.value,
            number_rooms: number_rooms.current.value,
            number_salle_bain: number_salle_bain.current.value,
            number_salle: number_salle.current.value,
            balcon: balcon.current.value,
            terrasse: terrasse.current.value,
            piscine: piscine.current.value,
            parking: parking.current.value,
            assenceur: assenceur.current.value,

            image: image.current.files[0],
        };


        setError("");
        try {
            console.log(AnnonceData);

            const response = await axiosClient.post("/annonces", AnnonceData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                console.log("Annonce created successfully");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get categories/annonceTypes/cities

    // useEffect(() => {

    //     getCategories();

    //     getAnnonceTypes();

    //     getCities();
    // }
    //     , []);



    return (
        <div>
            <main>

                {/* form section */}
                <section>
                    <h2 className="text-center my-5 " style={{ textAlign: "center" }}>Create a new Announcement <MdCreateNewFolder style={{ color: '#7200f4', fontSize: '35px' }} /></h2>
             <AnnonceFormulaire handleSubmit={handleSubmit} allAnnonces={annonces}/>
                </section>
            </main>
        </div>
    );
};

export default AnnonceCreataForm;
