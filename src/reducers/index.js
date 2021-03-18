import { QUOTES_TYPES } from "../actions/quotesActions"

const INITIAL_STATE = {
    quotes: [],
    isLoading: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QUOTES_TYPES.getQuotes:
            return {
                ...state,
                isLoading: true
            };

        case QUOTES_TYPES.getQuotesSuccess:
            return {
                ...state,
                isLoading: false,
                quotes: action.payload
            };

        case QUOTES_TYPES.getQuotesFail:
            return {
                ...state,
                isLoading: false,
                
            }
    
        default:
            return state;
    }
};

export default reducer;
