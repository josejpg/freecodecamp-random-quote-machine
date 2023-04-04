import { LOAD_QUOTES, NEW_QUOTE } from "./Consts";
import { EventLoadQuotesType } from "../types/event-load-quote.type";
import { EventNewQuoteType } from "../types/event-new-quote.type";
import { Quote } from "../types/quote.type";

const loadQuotesEvent = (quotes: Quote[]): EventLoadQuotesType => {
    return {
        type: LOAD_QUOTES,
        quotes: [...quotes]
    }
};

const newQuoteEvent = (quote: Quote): EventNewQuoteType => {
    return {
        type: NEW_QUOTE,
        quote,
    }
};

export {
    loadQuotesEvent,
    newQuoteEvent
}