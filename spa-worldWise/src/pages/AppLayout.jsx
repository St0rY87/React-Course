import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";

function AppLayout() {
  return (
    <div>
      <AppNav />
      <h1>APP</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default AppLayout;
