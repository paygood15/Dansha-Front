
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App.jsx'
import Shop from "./pages/Shop.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Produect from "./pages/Produect.jsx";
import OneCategory from "./pages/OneCategory.jsx";
import Cart from "./pages/Cart.jsx";
import ChackOut from "./pages/ChackOut.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";

// Admin pages
import Admin from "./pages/Admin/Admin.jsx";
import AdminCategory from "./pages/Admin/AdminCategory.jsx";
import EditProducts from "./pages/Admin/EditProducts.jsx";
import EditCategory from "./pages/Admin/EditCategory.jsx";
import store from "./store/store.jsx";
import './index.css'


import RootLayout from "./RootLayout.jsx"
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <App /> },
        { path: "Shop", element: <Shop /> },    
        { path: "AboutMe", element: <AboutMe /> },
        { path: "Contact", element: <Contact /> },
        { path: "/Produect/:id", element: <Produect /> },
        { path: "/OneCategory/:id", element: <OneCategory /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "Cart", element: <Cart /> },
        { path: "ChackOut", element: <ChackOut /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "Admin", element: <Admin /> },
        { path: "AdminCategory", element: <AdminCategory /> },
        { path: "/Admin/EditProducts/:id", element: <EditProducts /> },
        { path: "/Admin/EditCategory/:id", element: <EditCategory /> },
      ]
    }
  ]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);








