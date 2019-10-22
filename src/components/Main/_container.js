import React, { Component } from 'react';
import Main from "./_presenter.js/index.js";
import { Route } from 'react-router-dom';

// 1. 버튼클릭별로 보이고, 안보이고
// 2. e.tar
class Container extends Component {

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
                render={() => <Main
                    {...this.state}
                />} />
        );
    }
}

export default Container;

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
