import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navigation isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

// import { Navigation } from "../../components/Navigation/Navigation";
// import { useState } from "react";
// import css from "./Home.module.css";

// const Home = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen((prev) => !prev);
//   };

//   return (
//     <div>
//       <Navigation isNavOpen={isNavOpen} toggleNav={toggleNav} />
//       <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
