import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName/routesName.js";
import Portfolio from "../page/porfolio.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.portfolio} element={<Portfolio />} />
    </Routes>
  );
};

export default AppRouter;
