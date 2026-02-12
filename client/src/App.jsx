import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import CategoryCard from "./components/CategoryCard/CategoryCard";

function App() {
  const Layout = () => {
    return (

      <>
        <Navbar />
        <Outlet />
        <Footer />
        <CategoryCard />
      </>
    );
  };

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gigs", element: <Gigs /> },
      { path: "/gig", element: <Gig /> },
      { path: "/add", element: <Add /> },
      { path: "/orders", element: <Orders /> },
      { path: "/messages", element: <Messages /> },
      { path: "/message", element: <Message /> },
      { path: "/mygigs", element: <MyGigs /> },
    ],
  },
]);


  return <RouterProvider router={router} />;
}

export default App;
