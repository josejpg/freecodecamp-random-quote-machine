import React from 'react';
import './Presentational.scss';
import { connect, Provider } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./connections/quotes.connection";
import { Presentational } from "./Presentational";
import { store } from "./stores/quotes.store";
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        );
    }
};

export default App;
