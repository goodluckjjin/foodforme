import React from 'react';
import './style.scss';

const Sort =(props)=> {
    return(
        <li className="sort">
            <button name={props.name} value={props.value} onClick={props.onClickSort} className="sort_btn">
                <span className="circle"></span>
                <span className="tit">No Gluten</span>
            </button>
        </li>
    );
}

export default Sort;