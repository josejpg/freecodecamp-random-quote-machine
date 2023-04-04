import { Quote } from "./quote.type";

export type EventLoadQuotesType = {
    type: string,
    quotes: Quote[]
}