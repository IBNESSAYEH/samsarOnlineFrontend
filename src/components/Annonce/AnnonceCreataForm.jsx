import React, { useRef,useState } from "react";

const AnnonceCreataForm = () => {

// form inpuuts validation and subbmission
const title = useRef("");
const address = useRef("");
const email = useRef("");
const description = useRef("");
const price = useRef("");
const monthPrice = useRef("");
const weekPrice = useRef("");
const dayPrice = useRef("");
const hourPrice = useRef("");
const image = useRef("");
const category = useRef("");
const type = useRef("");
const city_id = useRef("");
const floor = useRef("");
const surface = useRef("");
const rooms = useRef("");
const bathrooms = useRef("");
const toilets = useRef("");
const elevator = useRef("");
const balcony = useRef("");
const terrace = useRef("");
const pool = useRef("");
const parking = useRef("");

const [error, setError] = useState(false);



const handleSubmit = (e) => {
    e.preventDefault();
   


    const data = {
        title: title.current.value,
        address: address.current.value,
        email: email.current.value,
        description: description.current.value,
        price: price.current.value,
        monthPrice: monthPrice.current.value,
        weekPrice: weekPrice.current.value,
        dayPrice: dayPrice.current.value,
        hourPrice: hourPrice.current.value,
        image: image.current.value,
        category: category.current.value,
        type: type.current.value,
        city_id: city_id.current.value,
        floor: floor.current.value,
        surface: surface.current.value,
        rooms: rooms.current.value,
        bathrooms: bathrooms.current.value,
        toilets: toilets.current.value,
        elevator: elevator.current.checked,
        balcony: balcony.current.checked,
        terrace: terrace.current.checked,
        pool: pool.current.checked,
        parking: parking.current.checked,
    };
if(title === "" || address === "" || email === "" || description === "" || price === "" || monthPrice === "" || weekPrice === "" || dayPrice === "" || hourPrice === "" || image === "" || category === "" || type === "" || city_id === "" || floor === "" || surface === "" || rooms === "" || bathrooms === "" || toilets === "" || elevator === "" || balcony === "" || terrace === "" || pool === "" || parking === ""){
    setError("All fields are required");
    return;
}
if(title.length < 3){
    setError("Title must be at least 3 characters");    
    return;
}
if(address.length < 3){
    setError("Address must be at least 3 characters");
    return;
}
// const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// if(!emailregex.test(email)){
//     setError("Invalid email");
//     return;
// }
if(description.length < 10){
    setError("Description must be at least 10 characters");
    return;
}
if(price < 0){  
    setError("Price must be a positive number");
    return;
}
if(monthPrice < 0){
    setError("Month price must be a positive number");
    return;

}
if(weekPrice < 0){
    setError("Week price must be a positive number");
    return;
}
if(dayPrice < 0){
    setError("Day price must be a positive number");
    return;
}
if(hourPrice < 0){
    setError("Hour price must be a positive number");
    return;
}
if(image === ""){
    setError("Image is required");
    return;
}
if(category === ""){

    setError("Category is required");
    return;
}   
if(type === ""){
    setError("Type is required");
    return;
}
if(city_id === ""){
    setError("City is required");
    return;
}
if(floor < 0){
    setError("Floor must be a positive number");
    return;
}
if(surface < 0){
    setError("Surface must be a positive number");
    return;
}
if(rooms < 0){
    setError("Rooms must be a positive number");
    return;
}   
if(bathrooms < 0){
    setError("Bathrooms must be a positive number");
    return;
}   
if(toilets < 0){
    setError("Toilets must be a positive number");
    return;
}
if(elevator === ""){
    setError("Elevator is required");
    return;
}
if(balcony === ""){
    setError("Balcony is required");
    return;
}
if(terrace === ""){
    setError("Terrace is required");
    return;
}   
if(pool === ""){
    setError("Pool is required");
    return;
}   
if(parking === ""){
    setError("Parking is required");    
    return;
}
setError("");
console.log(data);
}





    return (
        <div>
            <main>

                {/* form section */}
                <section>
                    <h2 className="text-center my-5 ">Create a new announcement</h2>
                    <div className="container">
                    {error && <div className="alert alert-danger">{error}</div>}
                        <div className="row flex-wrap-reverse" style={{ backgroundColor: "#d1dfe8", borderStartEndRadius: "4rem", borderEndStartRadius: "4rem", padding: "2rem", border: "solid #86a6bb12 3px" }}>
                            {/* form column */}
                            <div className="col-md-6 .trim()" style={{height: "54vh", overflowX: 'hidden', padding: "2rem", }}>
                                <form method='POST' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Title
                                        </label>
                                        <input type="text" ref={title} className="form-control announcement_form_input" id="title" placeholder="Enter title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Address
                                        </label>
                                        <input type="text" ref={address} className="form-control announcement_form_input" id="Address" placeholder="Enter address" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            Email
                                        </label>
                                        <input type="text" ref={email} className="form-control announcement_form_input" id="Email" placeholder="Enter email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <textarea
                                         ref={description}
                                            className="form-control announcement_form_input"
                                            id="description"
                                            placeholder="Enter description"
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Price
                                        </label>
                                        <input type="number" ref={price} className="form-control announcement_form_input" id="price" placeholder="Enter price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Month Price
                                        </label>
                                        <input type="number" ref={monthPrice} className="form-control announcement_form_input" id="month-price" placeholder="Enter month price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Week Price
                                        </label>
                                        <input type="number" ref={weekPrice} className="form-control announcement_form_input" id="week-price" placeholder="Enter week price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Day Price
                                        </label>
                                        <input type="number" ref={dayPrice} className="form-control announcement_form_input" id="day-price" placeholder="Enter day price" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Hour Price
                                        </label>
                                        <input type="number" ref={hourPrice} className="form-control announcement_form_input" id="hour-price" placeholder="Enter hour price" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">
                                            Image
                                        </label>
                                        <input type="file"  className="form-control announcement_form_input" id="image" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Category
                                        </label>
                                        <select ref={category} defaultValue="0" className="form-select form-select-lg announcement_form_input" name="category" id="category" >
                                            
                                            <option defaultValue="">New Delhi</option>
                                            <option defaultValue="">Istanbul</option>
                                            <option defaultValue="">Jakarta</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Type
                                        </label>
                                        <select ref={type} className="form-select form-select-lg announcement_form_input" name="type" id="type" defaultValue="0">
                                           
                                            <option defaultValue="">New Delhi</option>
                                            <option defaultValue="">Istanbul</option>
                                            <option defaultValue="">Jakarta</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            City
                                        </label>
                                        <select
                                        ref={city_id}
                                            className="form-select form-select-lg announcement_form_input"
                                            name="city_id"
                                            id="city_id"
                                            defaultValue="0"
                                        >
                                           
                                            <option defaultValue="">New Delhi</option>
                                            <option defaultValue="">Istanbul</option>
                                            <option defaultValue="">Jakarta</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Floor
                                        </label>
                                        <input ref={floor} type="number" className="form-control announcement_form_input" name="floor" id="floor" aria-describedby="helpId" placeholder="Enter number of floors" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Surface
                                        </label>
                                        <input ref={surface} type="number" className="form-control announcement_form_input" name="surface" id="surface" aria-describedby="helpId" placeholder="Enter surface" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Number of rooms
                                        </label>
                                        <input ref={rooms} type="number" className="form-control announcement_form_input" name="" id="rooms" aria-describedby="helpId" placeholder="Enater number of rooms" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">
                                            Number of bathrooms
                                        </label>
                                        <input type="number" ref={bathrooms} className="form-control announcement_form_input" name="" id="bathrooms" aria-describedby="helpId" placeholder="Enter number of bathrooms" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label ">
                                            Number of toilets
                                        </label>
                                        <input  ref={toilets} type="number" className="form-control announcement_form_input" name="" id="toilets" aria-describedby="helpId" placeholder="Enter number of toilets" />
                                    </div>
                                    <div className="form-check d-inline-block ">
                                        <input className="form-check-input " ref={elevator} type="checkbox" defaultValue="0" name='elevator' id="elevator" />
                                        <label className="form-check-label" htmlFor="">
                                            Elevator
                                        </label>
                                    </div>
                                    <div className="form-check d-inline-block ">
                                        <input className="form-check-input" type="checkbox" defaultValue="0" name="balcony" id="balcony" />
                                        <label className="form-check-label " ref={balcony} htmlFor="">
                                            Balcony
                                        </label>
                                    </div>
                                    <div className="form-check d-inline-block ">
                                        <input className="form-check-input " ref={terrace} type="checkbox" defaultValue="0" name='terrace' id="terrace" />
                                        <label className="form-check-label" htmlFor="">
                                            Terrace
                                        </label>
                                    </div>
                                    <div className="form-check d-inline-block">
                                        <input className="form-check-input" ref={pool} type="checkbox" defaultValue="0" name="pool" id="pool"/>
                                        <label className="form-check-label" htmlFor="">
                                            Pool
                                        </label>
                                    </div>
                                    <div className="form-check d-inline-block">
                                        <input
                                        ref={parking}
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="0"
                                            name="parking"
                                            id="parking"
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Parking
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary d-block ">
                                        Create
                                    </button>
                                </form>
                            </div>
                            {/* form image column */}
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg" alt="annonce" style={{ borderStartEndRadius: "2rem" }} className="w-100"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AnnonceCreataForm;
