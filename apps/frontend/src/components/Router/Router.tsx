import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Routine from "../Routine/Routine";
import Settings from "../RoutineSettings/RoutineSettings";
import Exercises from "../Exercises/Exercises";
import TabsContainer from "../TabsContainer/TabsContainer";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Exercises />} />
      <Route path="/routine" element={<Routine />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/exercise" element={<TabsContainer />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/" />} />{" "}
    </Route>
  </Routes>
);

export default Router;
