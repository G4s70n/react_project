import React from "react";
import { useDispatch } from "react-redux";
import { filterGender, ageFilter, countryFilter, aZOrderFilter, cleanState  } from '../../redux/actions/actions.js';
import { countries } from '../../data/data.js';
import './PanelFiltersSorts.css';


const PanelFiltersSorts = () => {


    const dispatch = useDispatch();
    // MANEJADOR FILTRO GÉNEROS:
    function handleFilterGender (event){
        const filterValue = event.target.value;
        dispatch(filterGender(filterValue));
    };

    // MANEJADORES FILTRO EDAD:
    let valuesFilterAge = {filter: null, value: null};

    function handleFilterAge (event){
        const filterValue = event.target.value;
        valuesFilterAge.filter = filterValue;
    };

    function handleFilterAgeNumber (event) {
        const filterValue = event.target.value;
        valuesFilterAge.value = filterValue;
    };

    function handleFilterAgeBtn (event) {
        dispatch(ageFilter(valuesFilterAge));
    };

    // MANEJADOR FILTRO PAÍS:
    function handleFilterCountry (event) {
        let filterValue = event.target.value;
        dispatch(countryFilter(filterValue))
    };

    // MANEJADOR ORDEN A-Z:
    function handlerSort (event) {
        let filterValue = event.target.value;
        dispatch(aZOrderFilter(filterValue))
    };

    // MANEJADOR BOTÓN CLEAN:
    function handlerClean () {
        dispatch(cleanState())
        document.querySelectorAll('select, input[type="number"]').forEach(element => {
            element.value = "todos";
          });
    };

    return(
        <div className="container-filter-sorts">

            <div className="container-genero">
              <label>Filtrar por género:</label>  
              <select onChange={handleFilterGender} >
                <option key='0' value="todos">todos</option>
                <option key='1' value="femenino">femenino</option>
                <option key='2' value="masculino">masculino</option>
              </select>
            </div>


            <div className="container-edad">
                <label>Filtrar por edad:</label>
                <div className="input-btn-age-container">
                <select onChange={handleFilterAge}>
                    <option key='0' value="todos">todos</option>
                    <option key='1' value="mayor">Mayor a:</option>
                    <option key='2' value="menor">Menor a:</option>
                </select>
                    <input type="number" onChange={handleFilterAgeNumber} />
                    <button className="btn-age" onClick={handleFilterAgeBtn}>
                        <img width="13px" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-2.png" alt="lupa" />
                    </button>
                </div>
            </div>        


            <div className="container-pais">
                <label>Filtrar por país:</label>
                <select onChange={handleFilterCountry}>
                    <option key='-1' value="todos">todos</option>
                    {
                        countries.map((e, index) =>  (
                        <option key={index} value={e}>{e}</option>
                        ))
                    }
                </select>
            </div>

            <div className="container-a-z">
                <label>Ordenar Alfabéticamente:</label>
                <select onChange={handlerSort}>
                    <option key='0' value="todos">todos</option>
                    <option key='1' value="a-z">A-Z</option>
                    <option key='2' value="z-a">Z-A</option>
                </select>
            </div>

            <button className="clean-button" onClick={handlerClean}>Clean</button>
        </div>
    )
};


export default PanelFiltersSorts;


/* 
NOTA: 
    En el handler handlerClean(), también podría seleccionar todos los elementos a los que 
    quiero resetear su valor a 'todos', mediante un selector. Es este ej. uso un selector de clase:

    <select className="filter-input" onChange={handleFilterGender}>
        // opciones...
    </select>
    <input className="filter-input" type="number" onChange={handleFilterAgeNumber} />



    document.querySelectorAll('.filter-input').forEach(element => {
          element.value = "todos";
    });



NOTA: 
    También, se puede hacer que cada vez que se seleccione un filtro o se limpien
    con 'clean', la URL vuelva a la página 1: 
    http://127.0.0.1:5173/Paginado/page/1

    Esto sería una mejor práctica. Habría que hacerlo con:

    import { useHistory } from "react-router-dom";

    Y en la función manejadora agregar esto para que cambie la URL:
    history.push(`/Paginado/page/1`);
*/