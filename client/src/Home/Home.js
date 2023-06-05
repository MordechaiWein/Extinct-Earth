import React, { useContext } from "react";
import DrawerAppBar from "./DrawerAppBar";
import DrawerUserBar from "./DrawerUserBar";
import HomepageLayout from "./HomepageLayout";
import { MyContext } from "../MyContext";

import SignInSide from "./SignInSide";

function Home() {
    
    const {user} = useContext(MyContext)
    
    return (
        <div>
            {user ? <DrawerUserBar/> : <DrawerAppBar/>}
            {/* <HomepageLayout/> */}
            <SignInSide/>
        </div>
    )
}

export default Home