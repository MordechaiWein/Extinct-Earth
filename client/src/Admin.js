import React, { useContext } from "react";
import BecomeAdmin from "./BecomeAdmin";
import AdminUser from "./AdminUser";
import { MyContext } from "./MyContext";

function Admin() {

    const {user} = useContext(MyContext)

    if (user.admin === true) return <AdminUser/>
    if (user.admin === false) return <BecomeAdmin/>
}
export default Admin










  



