import React from 'react';
import './style.scss';
import SearchBar from '../SearchBar';
import Header from '../Header';

const Main = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <main className="main">
                    <div className="main_content"></div>
                    <SearchBar/>
                    <div className="sorting">
                        <h3 className="title">Sorting</h3>
                        <ul className="sort_list">
                            <li className="sort">
                                <button>
                                    <span className="circle"></span>
                                    <span className="tit">No Gluten</span>
                                </button>
                                
                            </li>
                            <li className="sort">
                                <span className="circle"></span>
                                <span className="tit">No Gluten</span>
                            </li>
                            <li className="sort">
                                <span className="circle"></span>
                                <span className="tit">No Gluten</span>
                            </li>
                            <li className="sort">
                                <span className="circle"></span>
                                <span className="tit">No Gluten</span>
                            </li>
                            <li className="sort">
                                <span className="circle"></span>
                                <span className="tit">No Gluten</span>
                            </li>
                            <li className="sort">
                                <span className="circle"></span>
                                <span className="tit">No Gluten</span>
                            </li>
                        </ul>
                    </div>
                    <div className="content fourGrid">
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                        <div className="feed">
                            <div className="pic"></div>
                            <div className="cnt">
                                <span className="tit">역전할머니 맥주</span>
                                <div className="tagBox">#여기 존맛탱</div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer"></footer>
            </div>
            
        </div>
    );
}

export default Main;