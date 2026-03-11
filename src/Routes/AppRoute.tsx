import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import TrackingPage from "../Pages/TrackingPage";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PublicRoute from "../Layouts/publicRoute";
import PrivateRoute from "../Layouts/privateRoute";
import Storage from "../Pages/Storage";
import Update from "../Pages/Update";
import UpdateLocation from "../Pages/UpdateLocation";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
         <Route path="/storage" element={<Storage/>} />
          <Route path="/updates" element={<Update/>} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
         
         
        </Route>

        {/* Private routes */}
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/location" element={<UpdateLocation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
