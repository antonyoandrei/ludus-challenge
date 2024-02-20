import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Details from "../pages/Details/Details";
import Homepage from "../pages/Homepage/Homepage";

const RoutesComponent: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
};

export default RoutesComponent;
