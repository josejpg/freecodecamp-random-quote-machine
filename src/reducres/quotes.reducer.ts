import { LOAD_QUOTES, NEW_QUOTE } from "../events/Consts";


const initialState: any = {
    quotes: [],
    quote: '',
    author: ''
};

const quotesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOAD_QUOTES:
            return {
                ...state,
                quotes: [...action?.quotes]
            };
        case NEW_QUOTE:
            return {
                ...state,
                ...action?.quote,
            };
        default:
            return state;
    }
};

export {quotesReducer}