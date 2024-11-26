import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RootLayout() {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
