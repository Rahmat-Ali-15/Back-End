import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { SignUp } from '../Pages/SignUp';
import { Login } from '../Pages/Login';
import { Todo } from '../Pages/Todo';
import { PrivateRoute } from '../Components/PrivateRoute';


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/todo' element={<PrivateRoute><Todo /></PrivateRoute>}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    )
}