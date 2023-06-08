import React, { useContext } from "react";
import DrawerAppBar from "./DrawerAppBar";
import DrawerUserBar from "./DrawerUserBar";
import Entry from "./Entry";
import { MyContext } from "../MyContext";

function Home() {
    
    const {user} = useContext(MyContext)
    
    return (
        <div>
            {user ? "" : <DrawerAppBar/>}
            <Entry/>
        </div>
    )
}

export default Home