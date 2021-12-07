import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';

function Locations() {
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();
    return (
        <div className="App">
           <h3> Locations Component</h3> 
           { params.name && <>
           <h4>welcome to our Location {params.name}</h4>
           <img src ={`https://source.unsplash.com/199x200/?${params.name}`} alt="loc"/>
           <p> <button onClick={ ()=> navigate("/")}> Home page</button></p>
           </>}          
        </div>
    )
}
export default Locations
