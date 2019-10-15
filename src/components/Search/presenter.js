import React from "react";
import './style.scss';
import Header from '../Header';
import SearchBar from '../SearchBar';
import Feed from '../Feed';

const Search = (props) => {
    return (
        <div className="search_wrapper">
           <Header/>
            <main className="main">
                <div className="container">
                    <SearchBar/>
                    <div className="content fourGrid">
                        <Feed/>
                        <Feed/>
                        <Feed/>
                        <Feed/>
                        <Feed/>
                    </div>
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default Search
;