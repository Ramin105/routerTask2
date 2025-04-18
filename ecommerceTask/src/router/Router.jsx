import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Favori from "../pages/favori/Favori";
import Basket from "../pages/basket/Basket";
import Home from "../pages/home/Home";
import NotFound from "../components/notFound/NotFound";
import Layout from "../components/layout/Layout";
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route element={<Layout/>}>  <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/favori" element={<Favori/>} /></Route>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;

// import { createBrowserRouter } from "react-router";

// import NotFound from "../components/notFound/NotFound";
// import Layout from "../components/layout/Layout";
// import Home from "../pages/home/Home";
// import Basket from "../pages/basket/Basket";
// import Favori from "../pages/favori/Favori";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Layout,
//     children: [
//       {
//         path: "/",
//         Component: Home,
//       },
//       {
//         path: "/basket",
//         Component: Basket,
//       },
//       {
//         path:'/favori',
//         Component:Favori,
//       },
//     ],
//   },
//   {
//     path: "*",
//     Component: NotFound,
//   },
// ]);
