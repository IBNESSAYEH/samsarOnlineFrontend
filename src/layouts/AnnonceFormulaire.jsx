import React, { useContext, useEffect } from 'react';
import { SamsarAnnoncContext } from '../contexts/AnnonceContext/AnnonceContextProvider';
import AuthContext from '../contexts/AuthenticationContext/AuthContexts';
import { useParams } from 'react-router-dom';

const AnnonceFormulaire = ({handleSubmit, allAnnonces}) => {
    const { currentUser, setCurrentUser, userToken, setUserToken, logout } = useContext(AuthContext);
    const { annonces, setAnnonces, validationAnnonceForm, setError, error, title, description, price,
        category, type, city_id, image, addresse, email, month_price, week_price, day_price, hour_price,
        phone, status, jardin, etage, surface, number_rooms, number_salle_bain, number_salle, balcon,
        terrasse, piscine, parking, assenceur, getCategories, getAnnonceTypes, getCities, categories, types, cities, getAnnonce} = SamsarAnnoncContext();
const {id} = useParams();
useEffect(() => {
    getCategories();

    getAnnonceTypes();

    getCities();
  
  
    }, []);
    return (
        <>
                  <div className="container">
                        {error && <div className="alert alert-danger">{error}</div>}
                        {annonces.length > 0 && (
                        <div className="row flex-wrap-reverse" style={{ backgroundColor: "#d1dfe8", borderStartEndRadius: "4rem", borderEndStartRadius: "4rem", padding: "2rem", border: "solid #86a6bb12 3px" }}>
                            {/* form column */}
                            <div className="col-md-6 " style={{ height: "54vh", overflowX: 'hidden', padding: "2rem", }}>
                                <form method='POST' onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="row">
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="title" className="form-label">
                                                Title
                                            </label>
                                            <input type="text" ref={title}  className="form-control announcement_form_input" id="title" placeholder="Enter title"/>
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="title" className="form-label">
                                                addresse
                                            </label>
                                            <input type="text" ref={addresse}  className="form-control announcement_form_input" id="addresse" placeholder="Enter addresse" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="title" className="form-label">
                                                Email
                                            </label>
                                            <input type="text" ref={email} className="form-control announcement_form_input" id="Email" placeholder="Enter email" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label">
                                                Phone
                                            </label>
                                            <input type="number" ref={phone}  min={10} className="form-control announcement_form_input" id="Email" placeholder="Enter Phone number" />
                                        </div>

                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="price" className="form-label">
                                                Price
                                            </label>
                                            <input type="number" ref={price}  className="form-control announcement_form_input" id="price" placeholder="Enter price" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="price" className="form-label">
                                                Month Price
                                            </label>
                                            <input type="number" ref={month_price}  className="form-control announcement_form_input" id="month-price" placeholder="Enter month price" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="price" className="form-label">
                                                Week Price
                                            </label>
                                            <input type="number" ref={week_price} className="form-control announcement_form_input" id="week-price" placeholder="Enter week price" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="price" className="form-label">
                                                Day Price
                                            </label>
                                            <input type="number" ref={day_price}  className="form-control announcement_form_input" id="day-price" placeholder="Enter day price" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="price" className="form-label">
                                                Hour Price
                                            </label>
                                            <input type="number" ref={hour_price}  className="form-control announcement_form_input" id="hour-price" placeholder="Enter hour price" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input type="file" ref={image} className="form-control announcement_form_input" id="image" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label">etage</label>
                                            <input ref={etage}  type="number" className="form-control announcement_form_input" name="floor" id="floor" aria-describedby="helpId" placeholder="Enter number of floors" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label">Surface</label>
                                            <input ref={surface}  type="number" className="form-control announcement_form_input" name="surface" id="surface" aria-describedby="helpId" placeholder="Enter surface" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label">Number of rooms</label>
                                            <input ref={number_rooms}  type="number" className="form-control announcement_form_input" name="" id="rooms" aria-describedby="helpId" placeholder="Enater number of rooms" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label">number salle bain</label>
                                            <input type="number" ref={number_salle_bain}  className="form-control announcement_form_input" name="" id="bathrooms" aria-describedby="helpId" placeholder="Enter number of bathrooms" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="" className="form-label ">number salle</label>
                                            <input ref={number_salle}  type="number" className="form-control announcement_form_input" name="" id="toilets" aria-describedby="helpId" placeholder="Enter number of toilets" />
                                        </div>
                                        <div className="mb-3 col-12 col-md-5 gap-2 flex-grow-1">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea ref={description}  className="form-control announcement_form_input" id="description" placeholder="Enter description" ></textarea>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between flex-wrap gap-1 ">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Category</label>
                                            <select ref={category} className="form-select select form-select-lg announcement_form_input  flex-grow-1" name="category" id="category" >
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Type</label>
                                            <select ref={type}  className="form-select  select form-select-lg announcement_form_input flex-grow-1" name="type" id="type" defaultValue="0">
                                                {types.map((type) => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">City</label>
                                            <select ref={city_id}  className="form-select form-select-lg announcement_form_input select flex-grow-1" name="city_id" id="city_id" defaultValue="0" >
                                                {cities.map((city) => (
                                                    <option key={city.id} value={city.id}>{city.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Status</label>
                                            <select ref={status}  className="form-select form-select-lg announcement_form_input select flex-grow-1" name="city_id" id="city_id" defaultValue="0" >
                                                <option value='disponible'>Yes</option>
                                                <option value='nondisponible'>No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between flex-wrap ">
                                        <div className="form-check d-inline-block ">
                                            <input className="form-check-input " ref={piscine}  type="checkbox" defaultValue="0" name='elevator' id="elevator" />
                                            <label className="form-check-label" htmlFor="">
                                                piscine
                                            </label>
                                        </div>
                                        <div className="form-check d-inline-block ">
                                            <input className="form-check-input" defaultValue="0" type="checkbox" ref={balcon} name="balcony" id="balcony" />
                                            <label className="form-check-label " htmlFor="">
                                                Balcon
                                            </label>
                                        </div>
                                        <div className="form-check d-inline-block ">
                                            <input className="form-check-input " ref={terrasse} defaultValue="0" type="checkbox" name='terrace' id="terrace" />
                                            <label className="form-check-label" htmlFor="">
                                                terrasse
                                            </label>
                                        </div>
                                        <div className="form-check d-inline-block">
                                            <input className="form-check-input" ref={jardin} defaultValue="0" type="checkbox" name="pool" id="pool" />
                                            <label className="form-check-label" htmlFor="">
                                                jardin
                                            </label>
                                        </div>
                                        <div className="form-check d-inline-block">
                                            <input className="form-check-input" ref={assenceur} defaultValue="0" type="checkbox" name="pool" id="pool" />
                                            <label className="form-check-label" htmlFor="">
                                                assenceur
                                            </label>
                                        </div>
                                        <div className="form-check d-inline-block">
                                            <input ref={parking} className="form-check-input" type="checkbox" defaultValue="0" name="parking" id="parking" />
                                            <label className="form-check-label" htmlFor="">
                                                Parking
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary d-block w-100 my-3" style={{ background: "#7200f4", border: 'none' }}>
                                        Create Annonce
                                    </button>
                                </form>
                            </div>
                            {/* form image column */}
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg" alt="annonce" style={{ borderStartEndRadius: "2rem" }} className="w-100" />
                            </div>
                        </div>
                        )
                        }
                    </div>
        </>
    );
};

export default AnnonceFormulaire;