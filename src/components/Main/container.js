import React, {Component} from 'react';
import Main from "./presenter.js";
import {Route} from 'react-router-dom';

class Container extends Component{
    
    state = {
        search_box: '',
        search_button: '',
    }

    render(){
        return(    
            <Route path="/main" render={() => <Main/>}/>
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
