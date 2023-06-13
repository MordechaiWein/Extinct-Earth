import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";


function AdminUser() {

    const {setEvents, events} = useContext(MyContext)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name: '',
        image: '',
        description: '', 
        start_date: '',
        end_date: '', 
        cause: ''
    })

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
        console.log(data)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/events", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setEvents([...events, data])
                })
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                  style={{display: "block", margin: '5px', width: '500px'}}
                  placeholder="name"
                  onChange={handleChange}
                  name= "name"
                  />
                <input 
                  style={{display: "block", margin: '5px', width: '500px'}}
                  placeholder="image"
                  onChange={handleChange}
                  name= "image"
                />
                <textarea 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="description"
                    onChange={handleChange}
                    name="description"
                    />
                <input  
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="start date"
                    onChange={handleChange}
                    name="start_date"
                    />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="end date"
                    onChange={handleChange}
                    name="end_date"
                    />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="cause"
                    onChange={handleChange}
                    name="cause"
                />
                  {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AdminUser