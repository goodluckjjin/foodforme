import React, { Component } from 'react';
// import Main from "./presenter.js";
import { Route } from 'react-router-dom';
import './style.scss';
import SearchBar from '../SearchBar';
import Header from '../Header';
import Feed from '../Feed';
import Sort from '../Sort';


// 1. 버튼클릭별로 보이고, 안보이고
// 2. e.tar
class Main extends Component {

    // state = {
    //     sort1: false,
    //     sort2: false,
    //     sort3: false,
    //     sort4: false,
    // }

    // handleSort = (e) => {
    // }

    // componentDidMount(){
    //     this.handleSort();
    // }

    render() {
        // console.log(this.sort1);
        return (
            <Route
                path="/main"
                render={() => <MainUI
                    {...this.state}
                />} />
        );
    }
}

const MainUI = (props) => {
    return (
        <div className="main_wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    <div className="main_content"></div>
                    <SearchBar />
                    <div className="sorting">
                        <h3 className="title">Sorting</h3>
                        <ul className="sort_list">
                            <Sort name="sort1" />
                            <Sort name="sort2" />
                            <Sort name="sort3" />
                            <Sort name="sort4" />
                            <Sort name="sort5" />
                            <Sort name="sort6" />
                        </ul>
                    </div>
                    <div className="content fourGrid sort1">
                        <Feed />
                    </div>
                    <div className="content fourGrid sort2">
                        <Feed />
                        <Feed />
                    </div>
                    <div className="content fourGrid sort3">
                        <Feed />
                        <Feed />
                        <Feed />
                    </div>
                    <div className="content fourGrid sort4">
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

// const test = { test1: 1, test2: 2, test3: 3 }
// 1. test.test1 (1) ES5
// 2. const { test1 } = test; ES6
// import RouteDom from 'react-router-dom';
// <Route></Route> (X) => <RouteDom.Route></RouteDom.Route>

// import {} => export 여러개 
// export const test = 'test1';
// export const testFunc = () => console.log('test');
// export const test2 = 'test2';
// 하나의 파일, export 여러개 
// import Main => export default 
