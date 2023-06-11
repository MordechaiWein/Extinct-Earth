import React from "react";
import { Link } from "react-router-dom";

function Species() {

    const species = ['FISH', 'BIRDS', 'REPTILES', 'MAMMALS', 'INSECTS', 'AMPHIBIANS']
    const speciesList = species.map(s => 
        <Link 
            className="specieshover"
            to={`${s.toLowerCase()}`}
            style={{
                fontWeight: 'bold',
                fontSize: '3.5rem',
                color: 'white',
                textDecoration: 'none', 
                padding: '1.5rem'
            }}
        >
        {s}
        </Link>
    )

    return (
        <div style={{
            backgroundColor: 'black',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{
                    color: 'grey', 
                    fontWeight: 'bold',
                    fontSize: '1.3rem'
                }}
            >
                ANIMALS  &nbsp; ⎯ 
            </h1>
            {speciesList}
        </div>
    )
}

export default Species





