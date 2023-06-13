import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";


function AdminAnimal() {

    const {setAnimals, animals} = useContext(MyContext)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name: '',
        image: '',
        classification: '', 
        history: '',
        time_period: '', 
        scientific_name: '',
        diet: '',
        longitude: '',
        latitude: '',
        fun_fact: '',
        link: ''
    })

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
        console.log(data)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/animals", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setAnimals([...animals, data])
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
                  style={{display: "block", margin: '5px', width: '1700px'}}
                  placeholder="image"
                  onChange={handleChange}
                  name= "image"
                />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="classification"
                    onChange={handleChange}
                    name="classification"
                    />
                <textarea  
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="history"
                    onChange={handleChange}
                    name="history"
                    />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="time perid"
                    onChange={handleChange}
                    name="time_period"
                    />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="scientific name"
                    onChange={handleChange}
                    name="scientific_name"
                />
                       <input 
                  style={{display: "block", margin: '5px', width: '500px'}}
                  placeholder="diet"
                  onChange={handleChange}
                  name= "diet"
                  />
                <input 
                  style={{display: "block", margin: '5px', width: '500px'}}
                  placeholder="longitude"
                  onChange={handleChange}
                  name= "longitude"
                />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="latitude"
                    onChange={handleChange}
                    name="latitude"
                    />
                <input  
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="fun fact"
                    onChange={handleChange}
                    name="fun_fact"
                    />
                <input 
                    style={{display: "block", margin: '5px', width: '500px'}}
                    placeholder="link"
                    onChange={handleChange}
                    name="link"
                    />
                  {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AdminAnimal






