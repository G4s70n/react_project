import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import PanelFiltersSorts from "../PanelFiltersSorts/PanelFiltersSorts";
import "./Pagination.css";
import { useParams } from "react-router-dom";
import PaginationButtons from "./PaginationButtons/PaginationButtons";


const Pagination = () => {

  const peopleRender = useSelector((state) => state.filtredPeople);

  const { page } = useParams();
  const pageNumber = page ? parseInt(page) : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(peopleRender.length / itemsPerPage);

  const visiblePeople = peopleRender.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  return (
    <div>

      <h1 className="h1">Paginación en React</h1>

      <PanelFiltersSorts />

      {peopleRender.length > 0 ? (
        <div className="cards-container">

          {visiblePeople.map((person, index) => {
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
      ) : (
        <h2>No hay resultados para la búsqueda</h2>
      )}

      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};


export default Pagination;



/* 
NOTA: 
    Para poder aplicar el paginado en un componente:
    
    - Primero editar la ruta en App.jsx
        <Route path='/Paginado/page/:page' component={Pagination} />

    - La variable 'peopleRender' debe tener todos los datos a renderizar (cards).

    - Acá va la cantidad de cards que querés renderizar por página:
        const itemsPerPage = 8;

    - En el 'handlePage' modificar la ruta para que sea igual que la de App.jsx
         history.push(`/Paginado/page/${parseInt(currentPage + 1)}`);
         (hacerlo en el archivo PaginationButtons.jsx > handlePage)

    - En cualquier link hacia el componente como en el NavBar debería redirigir a:
        <Link to="/Paginado/page/1">

    En este caso la URL del sitio queda así:
        http://127.0.0.1:5173/Paginado/page/5
*/