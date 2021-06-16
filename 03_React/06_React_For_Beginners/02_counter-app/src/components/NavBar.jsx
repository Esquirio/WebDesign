// import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    console.log('NavBar - Rendered');

    return (
        <nav id="NavBar" className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#NavBar">
                    Navbar{' '}
                    <span className="badge rounded-pill bg-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
//         return (
//             <nav id="NavBar" className="navbar navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#NavBar">
//                         Navbar{' '}
//                         <span className="badge rounded-pill bg-secondary">
//                             {this.props.totalCounters}
//                         </span>
//                     </a>
//                 </div>
//             </nav>
//         );
//     }
// }

export default NavBar;
