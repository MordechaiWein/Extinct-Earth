import React from "react";
import AdminEvents from "./Admin/AdminEvents";
import AdminAnimals from "./Admin/AdminAnimals";
import AdminAnimalDashboard from "./Admin/AdminAnimalDashboard";
import AdminEventDashboard from "./Admin/AdminEventDashboard";

function AdminUser() {
    
    return (
        <div>
            <AdminEvents/>
            <AdminAnimals/>
            <AdminAnimalDashboard/>
            <AdminEventDashboard/>
        </div>
    )
}

export default AdminUser