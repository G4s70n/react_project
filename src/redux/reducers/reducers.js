import {
    FILTER_GENDER,
    FILTER_AGE,
    FILTER_COUNTRY,
    SORT_AZ,
    CLEAN_STATE,
} from '../actions/actions.js';




import { people } from '../../data/data.js';

const initialState = {
    people: people,
    filtredPeople: people,
    filtersAndSorts: [
        {filter: 'genero', value: null},
        {filter: 'null', value: null}, // le paso desde el componente {filter: 'mayor / menor', value: 25},
        {filter: 'country', value: null},
        {filter: null, value: null}, // acá desde el case SORT_AZ: le paso  {filter: 'a-z / z-a', value: 'a-z / z-a'}
    ]
};


const rootReducer = (state = initialState, action) => {

    // FILTRADO Y ORDENAMIENTO:

    // CREAMOS UNA COPIA DE LOS DATOS ORIGINALES PARA MODIFICAR:
    let filtrados = state.people.slice(); // Con slice() creamos una copia cuyos ordenamientos o filtrados aplicados en ella no va a afectar a la copia original que guarda los datos (people de initialState)


    const filtrarOrdenar = (filtroValor) => {

        // SI EL VALOR ES NULL O 'TODOS', NO HAY NINGÚN FILTRO ACTIVO O NO SE DEBE APLICAR. DETENEMOS LA EJECUCIÓN:
        if(filtroValor.value === null || filtroValor.value === 'todos') return;


        // APLICAMOS LOS FILTROS Y ORDENAMIENTOS ACTIVOS:
        if(filtroValor.filter === 'genero') {
          filtrados = filtrados.filter(persona => persona.genero === filtroValor.value);
        };

        if(filtroValor.filter === 'mayor') {
          filtrados = filtrados.filter(persona => persona.edad > filtroValor.value);
        };

        if(filtroValor.filter === 'menor') {
            filtrados = filtrados.filter(persona => persona.edad < filtroValor.value);
        };

        if(filtroValor.filter === 'country') {
            filtrados = filtrados.filter(persona => persona.pais === filtroValor.value);
        };

        if(filtroValor.filter === 'a-z') {
            filtrados = filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        };
        
        if(filtroValor.filter === 'z-a') {
            filtrados = filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        };


        // LE ASIGNAMOS LA COPIA MODIFICADA A LA PROPIEDAD DEL E. GLOBAL QUE SE VA A RENDERIZAR:
        return state.filtredPeople =  filtrados; 
    };


    const activadorFiltros = (filtersAndSorts) => {
        filtersAndSorts.map(e => filtrarOrdenar(e));
    };


    // LIMPIA TODOS LOS FILTROS Y ORDENAMIENTOS
    const cleanState = () => {
        state.filtersAndSorts= state.filtersAndSorts.map(item => ({
            ...item,
            value: null
        }));
    };
    

    // FILTRADO Y ORDENAMIENTO //



    switch (action.type) {
        case FILTER_GENDER:
            state.filtersAndSorts[0].value = action.payload;
            activadorFiltros(state.filtersAndSorts)
            return {
                ...state,
            };
        case FILTER_AGE:
            state.filtersAndSorts[1] = action.payload;
            activadorFiltros(state.filtersAndSorts)
            return {
                 ...state,
            };    
        case FILTER_COUNTRY:
            state.filtersAndSorts[2].value = action.payload;
            activadorFiltros(state.filtersAndSorts)
            return {
                ...state,
            };    
        case SORT_AZ:
            state.filtersAndSorts[3].filter = action.payload;
            state.filtersAndSorts[3].value = action.payload;
            activadorFiltros(state.filtersAndSorts)
            return {
                ...state
            };
        case CLEAN_STATE:
            cleanState();
            state.filtredPeople = state.people;
            return {
                ...state
            }
        default:
            return{
                ...state
            };
    }

};





export default rootReducer;