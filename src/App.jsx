// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ParkingList from "./pages/ParkingList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParkingDetails from "./pages/ParkingDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/parkinglist" element={<ParkingList />} />
      <Route path="/parkingdetails" element={<ParkingDetails />} />
    </Routes>
  );
}
export default App;
