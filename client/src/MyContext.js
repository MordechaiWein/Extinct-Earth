import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {
    
    const [user, setUser] = useState(null)
    const [page, setPage] = useState('Home')
    const [events, setEvents] = useState([])
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        fetch('/me')
        .then((response) => {
            if (response.ok) {
                response.json().then(data => setUser(data))
            }
        })
    },[])
    
    useEffect(() => {
        fetch('/events')
        .then(response => response.json())
        .then(data => setEvents(data))
    },[])

    useEffect(() => {
        fetch('/animals')
        .then(response => response.json())
        .then(data => setAnimals(data))
    },[])
    
    return (
        <MyContext.Provider value={{ user, setUser, page, setPage, events, setEvents, animals, setAnimals }}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}








