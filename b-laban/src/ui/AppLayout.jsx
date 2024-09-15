import { Outlet } from "react-router";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="h-screen">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
