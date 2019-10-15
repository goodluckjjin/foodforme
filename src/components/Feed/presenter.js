import React from 'react';
import './style.scss';

const Feed = (props) => {
    return (
        <div className="feed">
            <div className="pic"></div>
            <div className="cnt">
                <span className="tit">역전할머니 맥주</span>
                <div className="tagBox">#여기 존맛탱</div>
            </div>
        </div>
    );
}

export default Feed;