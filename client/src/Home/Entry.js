import React, { useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomepageLayout from "./HomepageLayout";
import { MyContext } from "../MyContext";

function Entry() {
    
    const {page} = useContext(MyContext)
    
    if (page === "Home") return (<HomepageLayout/>)
    else if (page === "Log In") return (<SignIn/>)
    else return (<SignUp/>)
}

export default Entry