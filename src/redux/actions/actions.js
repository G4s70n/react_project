export const FILTER_GENDER = 'FILTER_GENDER';
export const FILTER_AGE = 'FILTER_AGE';
export const FILTER_COUNTRY = 'FILTER_COUNTRY';
export const SORT_AZ = 'FILTER_A-Z';
export const CLEAN_STATE = 'CLEAN_STATE';



export const filterGender = (gender) => {
    return {
        type:FILTER_GENDER,
        payload:gender
    }
};


export const ageFilter = (values) => {
    return {
        type:FILTER_AGE,
        payload:values
    }
};

export const countryFilter = (country) => {
    return {
        type: FILTER_COUNTRY,
        payload: country
    }
};


export const aZOrderFilter = (order) => {
    return {
        type: SORT_AZ,
        payload: order
    }
};

export const cleanState = () => {
    return {
        type: CLEAN_STATE
    }
};