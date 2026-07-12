import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
// import { SignUp } from "./Pages/SignUp"
import { AllRoutes } from "./Routes/AllRoutes"

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  )
}