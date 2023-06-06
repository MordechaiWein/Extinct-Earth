import React, { useState } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {
    
    const [user, setUser] = useState(false)
    const [page, setPage] = useState('Home')
    
    return (
        <MyContext.Provider value={{ user, page, setPage }}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}








