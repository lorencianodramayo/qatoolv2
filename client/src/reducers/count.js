const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return action.payload;
        default: 
            return state;
    }
};

export default countReducer;