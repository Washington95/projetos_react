import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { AboutItem } from "../pages/AboutItem";
import { NotFound } from "../pages/NotFound";
import { ReAuth } from "../ReAuth";



export const MainRoutes = () => {
    return(
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<ReAuth><About/></ReAuth>} />
          <Route path="/sobre/:slug" element={<AboutItem/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}