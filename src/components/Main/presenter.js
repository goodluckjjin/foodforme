import React from 'react';
import './style.scss';
import SearchBar from '../SearchBar';
import Header from '../Header';
import Feed from '../Feed';
import Sort from '../Sort';

const Main = (props) => {
    return (
        <div className="main_wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <div className="main_content"></div>
                    <SearchBar/>
                    <div className="sorting">
                        <h3 className="title">Sorting</h3>
                        <ul className="sort_list">
                            <Sort/>
                            <Sort/>
                            <Sort/>
                            <Sort/>
                            <Sort/>
                            <Sort/>
                        </ul>
                    </div>
                    <div className="content fourGrid">
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                        <Feed />
                    </div>
                </div>
            </main>
            <footer className="footer">
                <div className="container">
                </div>
            </footer>
        </div>
    );
}

export default Main;