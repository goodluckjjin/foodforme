import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './style.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Feed from '../Feed';

class Search extends Component {

    render() {
        return (
            <Route
                exact path="/search"
                render={() => <SearchUI />} />
        );
    }
}


const SearchUI = (props) => {
    return (
        <div className="search_wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <SearchBar />
                    <div className="content fourGrid">
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                    </div>
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default Search;