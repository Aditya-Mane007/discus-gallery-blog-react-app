import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

function HomeLayout() {
  return (
    <div className="w-screen h-screen max-w-[1440px] max-h-[100vh] flex mx-auto text-[#f0f0f0] homeLayout">
      <nav className="w-[30%] h-auto max-[1440px]:h-full bg-[#444444] p-8 nav">
        <Sidebar />
      </nav>
      <main className="w-[70%] h-full bg-[#333333] py-8 max-[1440px]:p-8 overflow-scroll main">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
