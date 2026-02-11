import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (

      <>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          // element: <div>HEY WORKING</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
