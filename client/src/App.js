import "./App.css";
import {Routes} from "react-router-dom";
import routes from "./route/routes";

function App() {
  return (
    <div className="w-full  flex flex-col align-top justify-center font-heebo  bg-whiteSmoke500">
      <Routes>
        {routes.map((route) => route)}
      </Routes>
    </div>
  );
}

export default App;
