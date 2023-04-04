import React, { Component } from 'react';
import './Presentational.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { Quote } from "./types/quote.type";

export class Presentational extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            quotes: [],
            quote: '',
            author: '',
            color: ''
        }
        this.newQuote = this.newQuote.bind(this);
        if(this.props.quotes.length === 0) {
            this.props.loadQuotes();
        }
    }

    newQuote = () => {
        this.setState({ color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` });
        const quote: Quote = this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)];
        this.props.newQuote(quote);
    }

    render() {
        const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${`${this.props.quote}.${this.props.author}`}`;
        const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=${`${this.props.author}`}&amp;content=${`${this.props.quote}`}&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button`;
        return (<div>
            {(this.props.quote && this.props.author) && <div id="wrapper">
                <div id="quote-box">
                    <div className="quote-text">
                        <span id="text">{this.props.quote}</span>
                    </div>
                    <div className="quote-author">
                        - <span id="author">{this.props.author}</span>
                    </div>
                    <div className="buttons">
                        <a className="button"
                           id="tweet-quote"
                           title="Tweet this quote!"
                           target="_top"
                           style={{ backgroundColor: this.state.color }}
                           href={twitterUrl}
                        >
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a
                            className="button"
                            id="tumblr-quote"
                            title="Post this quote on tumblr!"
                            target="_blank"
                            rel="noreferrer"
                            href={tumblrUrl}
                            style={{ backgroundColor: this.state.color }}
                        >
                            <FontAwesomeIcon icon={faTumblr}/>
                        </a>
                        <button
                            className="button"
                            id="new-quote"
                            onClick={this.newQuote}
                            style={{ backgroundColor: this.state.color }}
                        >New quote
                        </button>
                    </div>
                </div>
            </div>
            }
        </div>);
    }

    componentDidMount() {
        this.newQuote();
    }

    componentDidUpdate() {
        document.body.style.backgroundColor = this.state.color;
    }
}