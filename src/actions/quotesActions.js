import axios from "axios";

export const QUOTES_TYPES = {
    getQuotes: "GET_QUOTES",
    getQuotesSuccess: "GET_QUOTES_SUCCESS",
    getQuotesFail: "GET_QUOTES_FAIL"
};

export const getQuotes = () => {
    return {
        type: QUOTES_TYPES.getQuotes,
    }
};

export const getQuotesSuccess = (quotes) => {
    return {
        type: QUOTES_TYPES.getQuotesSuccess,
        payload: quotes
    }
};

export const getQuotesFail = (err) => {
    return {
        type: QUOTES_TYPES.getQuotesFail,
        payload: err
    }
};

export const getQuotesThunk = () => {
    return (dispatch, getState) => {
        dispatch(getQuotes());
        return axios.get("https://prof-quotes.herokuapp.com/api/quotes")
            .then(res => dispatch(getQuotesSuccess(res.data.quotes)))
            .catch(err => dispatch(getQuotesFail(err)));
    }
}