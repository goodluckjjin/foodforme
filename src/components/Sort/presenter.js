import React from 'react';
import './style.scss';

const Sort =(props)=> {
    return(
        <li className="sort">
            <button className="sort_btn">
                <span className="circle"></span>
                <span className="tit">No Gluten</span>
            </button>
        </li>
    );
}

export default Sort;