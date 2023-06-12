import react from 'react';

import {Navigate, Outlet , useLocation} from "react-router-dom";
import { isAuthenticated } from '../helpers/auth';

const AdminRoute = ()=>{

    const location = useLocation();

    return(
        isAuthenticated() && isAuthenticated().role === "admin" ? (<Outlet/>):
        (<Navigate to="/login" state={{from:location}} replace/>)
    )
}

export default AdminRoute