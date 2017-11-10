import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    // Switch Case action.type
    switch (action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state]; // Concat ES6 Syntax
    }

    return state
}