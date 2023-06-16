import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { Typography} from '@mui/material';
import AdminEvents from "./Admin/AdminEvents";
import AdminAnimals from "./Admin/AdminAnimals";
import AdminAnimalDashboard from "./Admin/AdminAnimalDashboard";
import AdminEventDashboard from "./Admin/AdminEventDashboard";

function AdminUser() {
    
    const {user} = useContext(MyContext)
    
    return (
        <div>
            <Typography variant="h4" sx={{textAlign:'center'}}>
                Welcome To The Admins Page {user.username}
            </Typography>
            <AdminEvents/>
            <AdminAnimals/>
            <AdminAnimalDashboard/>
            <AdminEventDashboard/>
        </div>
    )
}

export default AdminUser