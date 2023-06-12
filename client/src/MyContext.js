import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {
    
    const [user, setUser] = useState(true)
    const [page, setPage] = useState('Home')
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/events')
        .then(response => response.json())
        .then(data => setEvents(data))
    },[])
    
    return (
        <MyContext.Provider value={{ user, page, setPage, events }}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}








