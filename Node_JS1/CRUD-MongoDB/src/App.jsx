import { BrowserRouter } from "react-router-dom"
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from "./Components/Navbar";

export const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <AllRoutes />
        </BrowserRouter>
    )
}