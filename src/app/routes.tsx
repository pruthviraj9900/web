import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CustomSoftware from "./pages/CustomSoftware";
import WebDevelopment from "./pages/WebDevelopment";
import Hosting from "./pages/Hosting";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import JoinUs from "./pages/JoinUs";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "custom-software", Component: CustomSoftware },
      { path: "web-development", Component: WebDevelopment },
      { path: "hosting", Component: Hosting },
      { path: "portfolio", Component: Portfolio },
      { path: "about", Component: About },
      { path: "process", Component: Process },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "dashboard-demo", Component: Dashboard },
      { path: "*", Component: NotFound },
      { path: "join-us", Component:JoinUs},
    ],
  },
]);
