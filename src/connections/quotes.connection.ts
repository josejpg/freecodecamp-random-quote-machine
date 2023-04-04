import { loadQuotesEvent, newQuoteEvent } from "../events/Events";
import { fetchQuotes } from "../actions/quotes.action";
import { Quote } from "../types/quote.type";

const mapStateToProps = (state: { quotes: Quote[], quote: string, author: string }) => {
    return {
        quotes: state.quotes,
        quote: state.quote,
        author: state.author,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadQuotes: async () => {
            const quotes: Quote[] = await fetchQuotes();
            const quote: Quote = quotes[Math.floor(Math.random() * quotes.length)];
            dispatch(loadQuotesEvent(quotes));
            dispatch(newQuoteEvent(quote))
        },
        newQuote: (quote: Quote) => {
            dispatch(newQuoteEvent(quote))
        }
    }
};

export {
    mapStateToProps,
    mapDispatchToProps
}