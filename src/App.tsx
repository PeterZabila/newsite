import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Catalogue from './components/Catalogue';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import About from './components/About';
// import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';


const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet />
      <Footer />
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
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      // {
      //   path: "/tipic/:type",
      //   element: <Product />,
      // },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
