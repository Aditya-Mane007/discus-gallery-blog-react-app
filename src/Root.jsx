import { Route, Routes } from "react-router-dom";
// import RootLayout from "./components/Layout/RootLayout";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import HomeLayout from "./components/Layout/HomeLayout";

function Root() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* <Route element={<RootLayout />}></Route> */}
    </Routes>
  );
}

export default Root;
