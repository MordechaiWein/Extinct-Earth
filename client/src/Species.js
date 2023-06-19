import React from "react";
import { Link } from "react-router-dom";

function Species() {

    const species = ['BIRD', 'REPTILE', 'MAMMAL', 'INSECT', 'AMPHIBIAN']
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
        {`${s}S`}
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
                SPECIES  &nbsp; ⎯ 
            </h1>
            <Link 
                className="specieshover"
                to={'fish'}
                style={{
                    fontWeight: 'bold',
                    fontSize: '3.5rem',
                    color: 'white',
                    textDecoration: 'none', 
                    padding: '1.5rem'
                }}
                >
                FISH
            </Link>
            {speciesList}
        </div>
    )
}

export default Species





