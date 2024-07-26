

const initialState = {
    foo:[1],
    switch: false
};

function addReducer(state=initialState, action){
    switch(action.type){
        case 'SET_FOO':
            return Object.assign({}, state, {
                foo: action.foo,
                switch: true
            });
            case 'PUSH_FOO': 
            return Object.assign({}, state, {
                foo: [...state.foo, action.foo],
                switch: !state.switch
            });
            default: 
            return state;
    }
    
}


export default addReducer;