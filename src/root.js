//1. root가 하는 일: App만 불러온다.
import React from 'react';
//2. BrowserRouter로 전체 컴포넌트가 감싸져 있어야한다.
// App은 왜 BrowserRouter로 감싸져 있어야 할까? react는 SPA이기 때문에 router를 지원하지않는다. SPA는 한번에 다 불러오기 때문에 npm에 react-router-dom을 누군가 만들었고 대신 router로 감싸준다고 약속을 해야 사용을 할 수 있게 되었다.
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const Root = () => {
    return(
        <BrowserRouter>
            <App></App>    
        </BrowserRouter>
    );
}

export default Root;


// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function Index() {
//     return <h2>Home</h2>
// }

// function About() {
//     return <h2>About</h2>
// }

// function Users() {
//     return <h2>Users</h2>
// }

// function AppRouter() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about/">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users/">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Route path="/" exact component={Index} />
//                 <Route path="/about/" component={About} />
//                 <Route path="/users/" component={Users} />

//             </div>
//         </Router>
//     )
// }

// export default AppRouter;