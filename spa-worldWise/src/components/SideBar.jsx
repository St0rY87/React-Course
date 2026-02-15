// import { Outlet } from "react-router-dom";
// import AppNav from "./AppNav";
// import Footer from "./Footer";
// import Logo from "./Logo";
// import styles from "./SideBar.module.css";

// function SideBar() {
//   return (
//     <div className={styles.sidebar}>
//       <Logo />
//       <AppNav />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default SideBar;

import styles from "./SideBar.module.css";
import Logo from './Logo'
import AppNav from './AppNav'
import Footer from './Footer'
 
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Footer/>
    </div>
  );
}

export default SideBar;
