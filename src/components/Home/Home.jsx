import React from "react";
import { useSelector } from "react-redux";
import UserCard from '../UserCard/UserCard';
import PanelFiltersSorts from '../PanelFiltersSorts/PanelFiltersSorts';
import './Home.css';



const Home = () => {

    const peopleRender =  useSelector ((state) => state.filtredPeople);
    
    
    return (
      <div>
        <h1 className="h1">Filtrados y ordenamientos</h1>
        <h2 className="h2">React - Redux</h2>
        <PanelFiltersSorts />
          {peopleRender.length > 0 
            ?(
            <div className="cards-container">
              {peopleRender.map((person, index) => {
                return (
                  <UserCard
                    key={index}
                    nombre={person.nombre}
                    apellido={person.apellido}
                    fotoDePerfil={person.fotoDePerfil}
                    pais={person.pais}
                    edad={person.edad}
                  />
                );
              })}
            </div>
            )
            :(
              <h2>No hay resultados para la búsqueda</h2>
            )

          }
      </div>
    );
};


export default Home;