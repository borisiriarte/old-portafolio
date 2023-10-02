import { HashRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { MyRoutes } from "./MyRoutes";

export const MyRouter = () => {
  return (
    <HashRouter>
      <Header />
      <MyRoutes />
    </HashRouter>
  );
};
