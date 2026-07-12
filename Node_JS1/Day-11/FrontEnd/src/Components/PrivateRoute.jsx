import {useSelector} from "react-redux"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector(state => state.auth);
    console.log("🚀 ~ isAuth:", isAuth);

    if(!isAuth){
        return <Navigate to='/login' replace />
    }

    return children
}