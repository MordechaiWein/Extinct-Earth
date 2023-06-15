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
      const nestedAnimal = animals.map(animal => {
        if (animal.id === data.animal_id) {
            return {...animal, comments: [...animal.comments, data]}
        }
        return animal
      })
      setAnimals(nestedAnimal)
    }
    function deleteComment(data) {
        const minusErasedComment = animals.map(animal => { 
            if (animal.id === data.animal_id) {
                return {...animal, comments: animal.comments.filter(comment => comment.id !== data.id)}
            } else {
                return animal
            }
        })
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
      


    






    
    return (
        <MyContext.Provider value={{ user, setUser, page, setPage, events, setEvents, animals, setAnimals, postComment, deleteComment, editComment}}>
            {children}                                                                                     
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}








