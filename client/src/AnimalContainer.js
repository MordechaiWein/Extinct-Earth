import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";
import AnimalCard from "./AnimalCard";
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ForestImage from './images/forest.png'
import InsectImage from './images/insect.png'
import SkyImage from './images/sky.png'
import FishImage from './images/fish.png'
import AmphibianImage from './images/amphibian.png'
import ReptileImage from './images/reptile.png'
import { useMediaQuery } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AnimalContainer() {

    const {animals} = useContext(MyContext)
    const params = useParams()
    const [dropdown, setDropdown] = useState("none")
    const isMobile = useMediaQuery('(max-width: 600px)');

    const [name, setName] = useState('')
    const classification = animals.filter(animal => animal.classification === params.classification)


    const sortedAnimals = classification.sort((a, b) => {
		if (dropdown === "none") {return true}
		if (dropdown === "a-z") {return a.name.localeCompare(b.name)}
		else if (dropdown === "z-a") {return b.name.localeCompare(a.name)}
	})
	

    const animalList = sortedAnimals
        .filter((animal) => (
            animal.name.toLowerCase().includes(name.toLowerCase())
        ))
        .map(animal => <AnimalCard key={animal.id} animal={animal}/>
    )

    function handleChange(event) {
        setName(event.target.value)
    }
 
    let image = ''
    if (params.classification === "fish") {
         image = FishImage
    } else if (params.classification === "bird") {
        image = SkyImage
    } else if (params.classification === "mammal") {
        image = ForestImage
    } else if (params.classification === "insect") {
        image = InsectImage
    } else if (params.classification === "amphibian") {
        image = AmphibianImage
    } else if (params.classification === "reptile") {
        image = ReptileImage
    }

    let animalType = ''
    if (params.classification === "fish") {
        animalType = params.classification.toUpperCase()
    } else {
        animalType = `${params.classification}s`.toUpperCase()
    }


    return (
            <Box ml={isMobile ? 1 : 11} mr={ isMobile? 1 : 8}>
                <Box  mr={isMobile ? 1 : 3}>
            <Typography 
        sx={{
            textAlign: 'center', 
            padding: isMobile ? '6rem' : '6rem',
            marginLeft: isMobile ? '0rem' : '0rem',
            marginRight: isMobile ? '0rem' : '0rem',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isMobile ? '1.8rem' : '4.9vw'
            }}
        >
        
        {animalType}
        </Typography>
                <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder='Search animal by name...'
                    type="text"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    style={{
                        marginBottom: '2rem', 
                        marginTop: '4rem',
                        width: '100%'
                    }}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )}}
                />
                </Box>
                <Box ml={isMobile ? 0 : 0} mr={ isMobile ? -1.4 : 0}>
                    <FormControl variant="standard" sx={{ marginBottom: '2rem', marginTop: "-2rem", minWidth: 90, float: 'right', marginRight: "2.2rem"}}>
                        <InputLabel shrink={false} >SORT BY</InputLabel>
                        <Select>
                        <MenuItem value="">
                          <em onClick={() => setDropdown('none')}>None</em>
                        </MenuItem>
                            <MenuItem onClick={() => setDropdown("a-z")}>Name (A to Z)</MenuItem>
                            <MenuItem onClick={() => setDropdown("z-a")}>Name (Z to A)</MenuItem>
                        </Select>
                    </FormControl>
                <Grid container>
                   {animalList}
                </Grid>
                </Box>
             
            </Box>
     
    )
}
export default AnimalContainer