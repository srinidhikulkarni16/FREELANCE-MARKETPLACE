import "./app.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slide from "./components/Slide/slide";
import Home from "./pages/home/Home";
import Gigs from "./pages/Gigs/Gigs";
import Gig from "./pages/Gig/Gig";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Add from "./pages/Add/Add";
import Orders from "./pages/Orders/Orders";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import MyGigs from "./pages/MyGigs/MyGigs";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Slide/>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;