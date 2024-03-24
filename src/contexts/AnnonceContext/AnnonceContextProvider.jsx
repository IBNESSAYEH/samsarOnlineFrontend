import React, { createContext, useContext, useState } from "react";

const AnnonceContext = createContext({});

export const AnnonceContextProvider = ({ children }) => {
   const  [annonce, setAnnonce] = useState([
        {
          id: 1,
          title: "Annonce 1",
          description: "Description de l'annonce 1",
          price: 1000,
            date_publication : "2021-09-01",
            date_construction : "2021-09-02",
            phone: "0666666666",
            email: "zertyui@ezfze.com",
            address: "Casa",
            homeowner: 'ibnessayeh',
            month_price: 1000,
            weak_price: 2000,
            day_price: 3000,
            hour_price: 3000,
            status: "active",
            categorie: "location",
            city: "Casablanca",
            type: "maison",
            etage: 1,
            surface: 1,
            number_rooms: 1,
            number_salle: 1,
            number_salle_bain: 1,
            assenceur: 1,
            balcon: 1,
            terrasse: 1,
            piscine	: 1,
            jardin: 1,
            parking: 1,
        },
        {
          id: 2,
          title: "Annonce 2",
          description: "Description de l'annonce 2",
          price: 2000,
          date_publication : "2021-09-01",
          date_construction : "2021-09-02",
          phone: "0666666666",
          email: "msjdhfjsfne@gmial.com",
          address: "Casa",
          month_price: 1000,
          homeowner: 'adel',
          weak_price: 2000,
          day_price: 3000,
          hour_price: 3000,
          status: "active",
          categorie: "location",
          city: "Casablanca",
            type: "maison",
            etage: 1,	
            surface: 1,	
            number_rooms: 1,	
            number_salle: 1,	
            number_salle_bain: 1,	
            assenceur: 1,	
            balcon: 1,	
            terrasse: 1,	
            piscine	: 1,
            jardin: 1,	
            parking: 1,

        },
      ]);
  return <AnnonceContext.Provider value={{
    annonce, 
    setAnnonce
  }}>
    {children}
    </AnnonceContext.Provider>;
}


export const SamsarAnnoncContext = () => useContext(AnnonceContext);