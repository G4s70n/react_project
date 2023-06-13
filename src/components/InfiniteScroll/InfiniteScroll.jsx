import React, { useState, useEffect, useRef } from 'react';
import PanelFiltersSorts from "../PanelFiltersSorts/PanelFiltersSorts";
import UserCard from "../UserCard/UserCard";
import { useSelector } from "react-redux";
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const peopleRender = useSelector((state) => state.filtredPeople);

  // GUARDAMOS LA DATA A RENDERIZAR EN E. LOCAL:
  const [cardsRender, setCardsRender] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageRef = useRef(1);
  const peopleRenderRef = useRef(peopleRender);

  console.log(peopleRender.length);

  function APISimulation(startIndex, endIndex) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let people = peopleRenderRef.current.slice(startIndex, endIndex);
        resolve(people);
      }, 2000);
    });
  }

  // FN() QUE MANEJA QUÉ HACER CUANDO LLEGAMOS AL FINAL DEL SCROLL:
  async function llamadoApi() {
    try {
      setLoading(true);
      let cards = await APISimulation((pageRef.current - 1) * 4, pageRef.current * 4);
      if (cards.length > 0) {
        setCardsRender((prevCards) => {
            const updatedCards = [...prevCards, ...cards];
            const uniqueCards = updatedCards.filter(
            (card, index) => !updatedCards.slice(0, index).some((prevCard) => prevCard.id === card.id)
          );
          return uniqueCards;
        });
        pageRef.current = pageRef.current + 1;
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  
  // FN() QUE DETECTA SI LLEGÓ AL FINAL DEL SCROLL:
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    // - 50px ES LA DISTANCIA DESDE EL BOTTOM Y EL SCROLL, APENAS PASE ESA DISTANCIA SE EJECUTA LA FN()
    // EN -1 SE EJECUTA CUANDO LA BARRA DEL SCROLL TOCA EL PISO
    if (scrollTop + clientHeight >= scrollHeight - 50 && !loading && cardsRender.length < peopleRender.length) {
      llamadoApi();
    }
  };

  useEffect(() => {
    peopleRenderRef.current = peopleRender;
    setCardsRender([]);
    pageRef.current = 1;
    llamadoApi(); // Renderizar automáticamente 4 tarjetas al montarse por primera vez
  }, [peopleRender]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="infinite-scroll-container">
      <h1>Infinite Scroll en React</h1>
      <PanelFiltersSorts />

      {cardsRender.length > 0 ? (
        <div className="cards-container">
          {cardsRender.map((person, index) => (
            <UserCard
              key={index}
              nombre={person.nombre}
              apellido={person.apellido}
              fotoDePerfil={person.fotoDePerfil}
              pais={person.pais}
              edad={person.edad}
            />
          ))}
          {loading && 
          <img className='img' src="https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif" alt="gif" /> 
          }
        </div>
      ) : (
        <div>
            {peopleRender.length === 0 && (
          <h2>No hay resultados para la búsqueda</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;




/* 
// ESTRUCTURA BÁSICA DEL SCROLL INFINITE:


const Componente = () => {
   // GUARDAMOS LA DATA A RENDERIZAR EN E. LOCAL:
  const [cardsRender, setCardsRender] = useState([]);


  // FN() QUE MANEJA QUÉ HACER CUANDO LLEGAMOS AL FINAL DEL SCROLL:
  function handleScroll () {
    // Código a ejecutar...
  };


    // FN() QUE DETECTA SI LLEGÓ AL FINAL DEL SCROLL:
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
    
        if (scrollTop + clientHeight >= scrollHeight - 50 && !loading && cardsRender.length < peopleRender.length) {
          llamadoApi();
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    return (
        <div>

        </div>
    )
}; 


*/