import { createBrowserRouter, createRoutesFromElements, Route , Outlet } from "react-router-dom";

import HomePage from "../pages/Index";
import AboutPage from "../pages/About";
import CoursesPage from "../pages/Courses";
import ContactPage from "../pages/Contact";
import PricingPage from "../pages/Pricing";
 

import RouteLayout from "../pages/Layout";
 

const router = createBrowserRouter(createRoutesFromElements(
  <>
  
     <Route   path="/" element={ <RouteLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/courses" element={<CoursesPage/>} />
     <Route path="/contact" element={<ContactPage/>} />
     <Route path="/pricing" element={<PricingPage/>} />

    <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  </>
        
      
  

));


export default router