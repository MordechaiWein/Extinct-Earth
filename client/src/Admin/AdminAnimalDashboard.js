import React, { useState, useContext } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MyContext } from "../MyContext";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AdminEditAnimals from "./AdminEditAnimals";
import Typography from '@mui/material/Typography';


const defaultTheme = createTheme();

function AdminAnimalDashboard() {

    const {animals, setAnimals} = useContext(MyContext)
    const [animalFlag, setAnimalFlag] = useState(false)
    const [creature, setCreature] = useState(null)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 170},
        { field: 'classification', headerName: 'Classification', width: 170},
        { field: 'edit', headerName: 'Edit', width: 170,
            renderCell: (params: GridCellParams) => {
                function handleEdit(event) {
                    event.preventDefault();
                    setCreature(params.row)
                    setAnimalFlag(!animalFlag)
                }
                return (
                    <div style={{display: 'flex'}}>
                        <ModeEditOutlineOutlinedIcon/>
                        <p style={{marginTop: '0.4rem', marginLeft: '0.4rem'}} onClick={handleEdit}>Edit</p>
                    </div>
                );
            },
        },
        { field: 'delete', headerName: 'Delete', width: 170,
            renderCell: (params: GridCellParams) => {
                function handleDelete(event) {
                    event.preventDefault();
                    fetch(`animals/${params.row.id}`, {
                        method: "DELETE"
                    })
                    .then(response => response.json())
                    .then(data => setAnimals(animals.filter(animal => animal.id !== data.id)))
                }
                return (
                    <div style={{display: 'flex'}}>
                        <DeleteOutlinedIcon/>
                        <p style={{marginTop: '0.2rem', marginLeft: '0.4rem'}} onClick={handleDelete}>Delete</p>
                    </div>
                );
            },
        },
    ];
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column'}}>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Typography component="h1" variant="h5" style={{marginBottom: '2rem'}}>
                        Edit and delete extinct animals
                    </Typography>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={animals}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </Box>
                </Box>
            </Container>
            { animalFlag ? 

              <AdminEditAnimals animal={creature}/>
                : 

                ""
            }
        </ThemeProvider>
    )
}
export default AdminAnimalDashboard









   





