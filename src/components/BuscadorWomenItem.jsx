
import React from 'react';
import './styles/Search-women.scss'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Buscador =()=>{
    return(
        <>
        <div className="contenedor-buscador">
         <input placeholder ="Busca una prenda " type="search"  className="Buscador-women-item"/>
         <button class="icon2">
            <FontAwesomeIcon icon={faSearch} className="img3" />
            </button>
        </div>
       
        </>
    );
}

export default Buscador;