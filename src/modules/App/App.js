import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {
  return (
    <div>
      <nav>
        <div>Navbar</div>
        <Link to="/">Root</Link>
        <Link to="home">Home</Link>
        <Link to="user">User</Link>
      </nav>
    </div>
  );
};
// import React, {Component} from 'react';

// import styles from './App.css';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <header>
//           <nav>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/FAQ">FAQ</a></li>
//               <li><a href="/rules">Rules</a></li>
//               <li><a href="/contact">Contact</a></li>
//             </ul>
//           </nav>
//         </header>
//          <div className={styles.container}>
//             {this.props.children}
//           </div>
//       </div>
//     )
//   }
// }

// export default App;