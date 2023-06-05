import React, { useState } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {
    
    const [user, setUser] = useState(null)
    
    return (
        <MyContext.Provider value={{ user }}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}








