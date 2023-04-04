import { Quote } from "./quote.type";

export type EventNewQuoteType = {
    type: string,
    quote: Quote
}