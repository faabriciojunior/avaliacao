import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Link from "./pages/Link"; 

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/link" element={ <Link/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;