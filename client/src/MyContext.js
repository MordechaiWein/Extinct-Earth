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
    
    function postComment(data) {
        const animalExists = user.animals.some(animal => animal.id === data.animal.id)
        const nestedAnimal = animals.map(animal => {
            if (animal.id === data.animal_id) {
                return {...animal, comments: [...animal.comments, data]}
            }
            return animal
        })
        if (!animalExists) {
            setUser({ ...user, animals: [...user.animals, data.animal], comments: [...user.comments, data] })
        } else if (animalExists) {
            setUser({...user, comments: [...user.comments, data]})
        }
        setAnimals(nestedAnimal)
    }
    
    function deleteComment(data) {
        const remarks = user.comments.filter(comment => comment.animal_id === data.animal_id)
        const minusErasedComment = animals.map(animal => { 
            if (animal.id === data.animal_id) {
                return {...animal, comments: animal.comments.filter(comment => comment.id !== data.id)}
            } else {
                return animal
            }
        })
        if (remarks.length === 1) {
            setUser({ ...user, animals: user.animals.filter(animal => animal.id !== data.animal.id), comments: user.comments.filter(comment => comment.id !== data.id) });
        } else if (remarks.length !== 0) {
            setUser({...user, comments: user.comments.filter(comment => comment.id !== data.id) })
        }
        setAnimals(minusErasedComment)
    }
    
    function editComment(data) {
        const switchedComments = animals.map(animal => {
            if (animal.id === data.animal_id) {
                return {...animal, comments: animal.comments.map(comment => {
                    if (comment.id === data.id) {
                        return data
                    } else {
                        return comment
                    }
                }
                )}
            } else {
                return animal
            }
        })
        setAnimals(switchedComments)
    }
    
    function editAnimals(data) {
        const updatedAnimals = animals.map((animal) => {
            if (animal.id === data.id) {
                return data
            } else {
                return animal
            }
        })
        const usersCurrentAnimals = user.animals.map((animal) => {
            if (animal.id === data.id) {
                return data
            } else {
                return animal
            }
        })
        setUser({...user, animals: usersCurrentAnimals})
        setAnimals(updatedAnimals)
    }
 
    function editEvents(data) {
        const updatedEvents = events.map((event) => {
            if (event.id === data.id) {
                return data
            } else {
                return event
            }
        })
        setEvents(updatedEvents)
    }
    
    return (
        <MyContext.Provider 
            value={{
                 user, 
                 setUser, 
                 page, 
                 setPage, 
                 events, 
                 setEvents, 
                 animals,
                 setAnimals, 
                 postComment, 
                 deleteComment, 
                 editComment,
                 editAnimals,
                 editEvents,
                }}
            >
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}
export { MyProvider, MyContext}








