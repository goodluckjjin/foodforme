import React from 'react';
import './style.scss';

const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <input type="text" placeholder="검색어를 입력하세요" className="searchInput"/>
            <button type="button" className="searchButton">검색</button>
        </div>
    );
}

export default SearchBar;