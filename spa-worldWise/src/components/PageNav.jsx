// import { NavLink } from "react-router-dom";
// import Logo from "./Logo";
// import styles from "./PageNav.module.css";

import { Link } from "react-router-dom"

// function PageNav() {
//   return (
//     <nav className={styles.nav}>
//       <Logo />

//       <ul>
//         <li>
//           <NavLink to="/pricing">Pricing</NavLink>
//         </li>
//         <li>
//           <NavLink to="/product">Product</NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className={styles.ctaLink}>
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default PageNav;


function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default PageNav
