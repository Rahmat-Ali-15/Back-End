import { Routes, Route } from "react-router-dom";

import { Home } from "../Components/Home";
import { Create } from "../Components/Create";
import { Read } from "../Components/Read";
import { Update } from "../Components/Update";
import { Delete } from "../Components/Delete";

export const AllRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userCreate" element={<Create />}></Route>
        <Route path="/userRead" element={<Read />}></Route>
        <Route path="/userUpdate" element={<Update />}></Route>
        <Route path="/userDelete" element={<Delete />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  )
};
