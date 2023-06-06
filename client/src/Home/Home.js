import React, { useContext } from "react";
import DrawerAppBar from "./DrawerAppBar";
import DrawerUserBar from "./DrawerUserBar";
import HomepageLayout from "./HomepageLayout";
import { MyContext } from "../MyContext";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



function Home() {
    
    const {user} = useContext(MyContext)
    
    return (
        <div>
            {user ? <DrawerUserBar/> : <DrawerAppBar/>}
            {/* <HomepageLayout/> */}
            {/* <SignIn/> */}
            <SignUp/>
          
        </div>
    )
}

export default Home