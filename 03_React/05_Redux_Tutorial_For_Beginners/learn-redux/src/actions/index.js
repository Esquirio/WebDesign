export const increment = (number) => {
    if(isNaN(number)){
        number = 1;
    }
    return {
        type: 'INCREMENT',
        payload: number
    };
};

export const decrement = (number) => {
    if(isNaN(number)){
        number = 1;
    }
    return {
        type: 'DECREMENT',
        payload: number
    };
};
