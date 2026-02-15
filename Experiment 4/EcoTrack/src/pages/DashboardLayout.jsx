import { Suspense } from "react";
import { Link,Outlet, useLocation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const DashboardLayout=()=>{
  const location=useLocation();
  return(
    <div style={{padding:"1rem"}}>
      <h2>Dashboard</h2>
      <nav>
        <Link to="summary">Summary</Link>{" | "}
        <Link to="analytics">Analytics</Link>{" | "}
        <Link to="settings">Settings</Link>
      </nav>
      <hr/>
      <Suspense key={location.pathname} fallback={<LinearProgress />}>
      <Outlet/>
      </Suspense>
      
    </div>
  )
}
export default DashboardLayout;