import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Routine from "../Routine/Routine";
import Settings from "../RoutineSettings/RoutineSettings";
import Exercises from "../Exercises/Exercises";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout children={undefined} />} />
    <Route path="/routine" element={<Routine />} />
    <Route path="/exercises" element={<Exercises />} />
    <Route path="/exercises/:exerciseId" element={<Exercises />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default Router;
