import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Routine from "../Routine/Routine";
import SideMenu from "../SideMenu/SideMenu"; // Import the missing component
import Settings from "../RoutineSettings/RoutineSettings"; // Import the missing component

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout children={undefined} />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/exercises" element={<SideMenu />} /> // Fix the missing
    component
    <Route path="/exercises/:exerciseId" element={<SideMenu />} /> // Fix the
    missing component
    <Route path="/settings" element={<Settings />} /> // Fix the missing
    component
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Router;
