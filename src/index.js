import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.js';
//import App from './components/App';
//3. index.js (react render 파일)에서 App이 아닌, BrowserRouter가 있는 Root파일을 가지고 온다.

ReactDOM.render(<Root />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));