import React from "react";
import './UserCard.css';



const UserCard = ({nombre, apellido, edad, pais, fotoDePerfil}) => {

    return (
        <div className="card">
            <img className="profile-image" src={fotoDePerfil} alt="profile image" />
            <p className="name">{nombre + ' ' + apellido}</p>
            <div className="details">
                <span className="value">{pais}</span>
                <span className="label">Edad:</span>
                <span className="value">{edad}</span>
            </div>
        </div>
    );
    
};



export default UserCard;