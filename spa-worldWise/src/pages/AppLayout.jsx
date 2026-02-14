// import SideBar from "../components/SideBar";
// import Map from "../components/Map";

import AppNav from "../components/AppNav"

// import styles from "./AppLayout.module.css";

// function AppLayout() {
//   return (
//     <div className={styles.app}>
//       <SideBar />
//       <Map />
//     </div>
//   );
// }

// export default AppLayout;

function AppLayout() {
  return (
    <div>
        <AppNav/>
        <div>APP</div>
    </div>
  )
}

export default AppLayout
