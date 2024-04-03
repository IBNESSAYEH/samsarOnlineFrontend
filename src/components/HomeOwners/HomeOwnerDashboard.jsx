import React, { useRef, useState } from 'react';
import Navbar from '../../layouts/Navbar';
import './AdminDashboard.css'; 
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillHome } from "react-icons/ai";
import { FaCcMastercard, FaUserSecret } from 'react-icons/fa6';
import { SamsarAnnoncContext } from '../../contexts/AnnonceContext/AnnonceContextProvider';
import axiosClient from '../../axios';

const HomeOwnerDashboard = () => {
    const {annonces, categories, setCategories} = SamsarAnnoncContext();



    const deleteCategory = async (id) => {
        try{
        const response = await axiosClient.delete(`/categories/${id}`);
        if(response.status === 200){
            setCategories(categories.filter(category => category.id !== id));
        }

        } catch (error) {
            console.log(error);
        }

    }

    const categoryName = useRef('');
    const [nameError, setNameError] = useState('');

    const createCategorie = async (e) => {
        e.preventDefault();

        if(categoryName.current.value.trim() === '' || categoryName.current.value.trim().length < 3 || !categoryName.current.value.trim()){
            setNameError('Please enter a category name with at least 3 characters.');
            return;
        }

        const data = {
            name: categoryName.current.value.trim()
        }
        try{
        const response = await axiosClient.post('/categories', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } );
        if(response.status === 201){
            setCategories([...categories, {id: 12,name: categoryName.current.value.trim()}]);
            setNameError('');
        }
    } catch (error) {
        console.log(error);
    }

    }

    const categoryNameRef = useRef('');
    const updateCategory = async (e, id) => {
        e.preventDefault();

        if(categoryNameRef.current.value.trim() === '' || categoryNameRef.current.value.trim().length < 3){
            setNameError('Please enter a category name with at least 3 characters.');
            return console.log(categoryNameRef.current.value) ;
        }

        const data = {
            name: categoryNameRef.current.value.trim()
        }
        try{
        const response = await axiosClient.put(`/categories/${id}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        } );
        if(response.status === 200){
           

            setCategories(prevCategories => {
                return prevCategories.map(category => {
                    if (category.id === id) {
                        return { ...category, name: categoryNameRef.current.value.trim() };
                    }
                    return category;
                });
            });
        }

        } catch (error) {
            console.log(error);
        }

    }




    return (
        <>
                <Navbar />
        <div className="admin-dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar  ">
                <ul className='d-flex flex-column justify-content-center gap-3 mt-5'>
                    <li><a href="#announcements"><HiMiniUsers /> Users</a></li>
                    <li><a href="#categories"><BiSolidCategory /> Categories</a></li>
                    <li><a href="#reservations"><AiFillHome /> Home</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                {/* Cards Section */}
                <section className="cards-section">
                    {/* Card for Announcements */}
                    <div id="announcements" className="card">
                        <h3><HiMiniUsers /> Users</h3>
                        <p>{}</p>
                    </div>
                    <div id="announcements" className="card">
                        <h3><FaUserSecret /> Announces</h3>
                        <p>{}</p>
                    </div>
                    {/* Card for Categories */}
                    <div id="categories" className="card">
                        <h3><BiSolidCategory /> reservations</h3>
                        <p>{categories.length}</p>
                    </div>
                    {/* Card for Reservations */}
                    <div id="reservations" className="card">
                        <h3><FaCcMastercard /> Win</h3>
                        <p>{}</p>
                    </div>
                </section>

                {/* Tables Section */}
                <section className="tables-section">
                    {/* Table for Users */}
                    <div className="table">
                        <h2>Users</h2>
                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                    </div>
                    {/* Table for Actions */}
                    <div className="table">
                        <h2>Categories <span className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalcreate">add category</span></h2>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalcreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={createCategorie}>
            <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">Category Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="categoryName" 
                    ref={categoryName}
                  
                    placeholder="Enter category name" 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Category</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(categorie => (
                                    <tr key={categorie.id}>
                                        <td>{categorie.id}</td>
                                        <td>{categorie.name}</td>
                                        <td>
                                            <button className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target={`#exampleModal${categorie.id}`}>Edit</button>


{/* <!-- Modal --> */}
<div className="modal fade" id={`exampleModal${categorie.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Category</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={(e) => updateCategory(e, categorie.id)}>
            <div className="mb-3">
                <label htmlFor="categoryName" className="form-label">Category Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="categoryName" 
                    defaultValue={categorie.name}
                    ref={categoryNameRef}
                    placeholder="Enter category name" 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Category</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>






                                            <button className="btn btn-danger" onClick={()=>deleteCategory(categorie.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}

export default HomeOwnerDashboard;
