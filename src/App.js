import logo from "./logo.svg";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Header from "./components/Header";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/stared",
    element: <Page2 />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
