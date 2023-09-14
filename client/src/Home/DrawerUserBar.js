import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MyContext } from "../MyContext";
import { useHistory } from "react-router-dom";
import Badge from '@mui/material/Badge';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['About','Species', 'Extinction Events'];

export default function DrawerUserBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMediumScreen = useMediaQuery('(max-width: 990px)');
  const {setUser, user, setMessage} = useContext(MyContext)
  const history = useHistory()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // function handleClick() {
  //   fetch('/logout', {
  //     method: 'DELETE'
  //   })
  //   .then(setUser(null), history.push('/'))
  //   alert('Goodbye')
  //   // fetch('/me', {
  //   //   headers: {'Accept': 'application/json'}
  //   // })
  //   // .then(response => response.json())
  //   // .then(data => setMessage(data.error))
  // }

  function handleClick() {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setUser(null)
        history.push('/')
        alert('Goodbye')
        fetch('/me', {
          headers: {'Accept': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setMessage(data.error))
      } else {
        console.log("error: you are not logged in to be able to log out")
      }
    })
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Extinct Earth
      </Typography>
      <Divider />
      <List>

      <ListItem disablePadding sx={{ justifyContent: 'center' }}>
            <NavLink to='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none', 
                color: 'black',
                fontSize: '1.5rem' 
                }}>
              <ListItemText primary="Home"/>
            </NavLink>
          </ListItem>

        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ justifyContent: 'center' }}>
            <NavLink 
              to={`/${item}`} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none', 
                color: 'black',
                fontSize: '1.5rem' 
                }}>
              <ListItemText primary={item} />
            </NavLink>
          </ListItem>
        ))}

    <ListItem  disablePadding sx={{ justifyContent: 'center' }}>
            <NavLink 
              to={'/Favorites'} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none', 
                color: 'black',
                fontSize: '1.5rem' 
                }}>
              <ListItemText primary=' Favorites' />
            </NavLink>
          </ListItem>

          <ListItem disablePadding sx={{ justifyContent: 'center' }}>
            <NavLink 
              to={'/Admin'} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none', 
                color: 'black',
                fontSize: '1.5rem' 
                }}>
              <ListItemText primary='Admin' />
            </NavLink>
          </ListItem>
         

    

          <ListItem disablePadding>
            <ListItemButton 
              onClick={handleClick}
              sx={{ 
                textAlign: 'center', 
                color: '#0288d1'
                }}
                >
              <ListItemText primary="Logout"/>
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{color: '#fff',backgroundColor: 'black', boxShadow: 'none', padding: '1rem'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', fontWeight: "bold" } }}
          >
            <MenuIcon />
            &nbsp;Extinct Earth 
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: 'Montserrat', fontSize: '2.4rem'} }}
          >
            
           <div style={{display:'flex', alignItems: 'center'}}>
            Extinct Earth
          </div> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          {isMediumScreen ? (

                  <>
                  <Button>
                    <NavLink 
                      to='/'
                      exact 
                      style={{ 
                        color: '#fff', 
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold', 
                        fontSize: '1rem',
                        textDecoration: 'none'
                      }}
                      activeStyle={{ 
                        backgroundColor: "white", 
                        color: 'black', 
                        paddingLeft: '1rem',
                        paddingRight: '1rem' 
                      }}
                    >
                      Home
                    </NavLink>
                  </Button>
                  <Button 
                    size='small'
                    onClick={handleClick}
                    sx={{ 
                      color: '#fff', 
                      fontFamily: 'Montserrat',
                      fontWeight: 'bold', 
                      fontSize: '1rem',
                      border: 'solid 1px white',
                    }}
                  >
                    Logout
                  </Button>
                  </>
                 ) : (
                  <>
            <Button>
                <NavLink 
                  to='/'
                  exact 
                  style={{ 
                    color: '#fff', 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold', 
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                  activeStyle={{ 
                    backgroundColor: "white", 
                    color: 'black', 
                    paddingLeft: '1rem',
                    paddingRight: '1rem' 
                  }}
                >
                 Home
                </NavLink>
              </Button>
              {navItems.map((item) => (
              <Button key={item}>
                <NavLink 
                  to={`/${item}`}
                  exact 
                  style={{ 
                    color: '#fff', 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold', 
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                  activeStyle={{ 
                    backgroundColor: "white", 
                    color: 'black', 
                    paddingLeft: '1rem',
                    paddingRight: '1rem' 
                  }}
                >
                  {item}
                  
                </NavLink>
              </Button>
            ))}
             <Button >
                <NavLink 
                  to={'/Favorites'}
                  exact 
                  style={{ 
                    color: '#fff', 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold', 
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                  activeStyle={{ 
                    backgroundColor: "white", 
                    color: 'black', 
                    paddingLeft: '1rem',
                    paddingRight: '1rem' 
                  }}
                >
                  <Badge badgeContent={user.animals.length}  color="error" >
                  Favorites
                </Badge>
                  
                  
                </NavLink>
              </Button>
              <Button >
                <NavLink 
                  to={'/Admin'}
                  exact 
                  style={{ 
                    color: '#fff', 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold', 
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                  activeStyle={{ 
                    backgroundColor: "white", 
                    color: 'black', 
                    paddingLeft: '1rem',
                    paddingRight: '1rem' 
                  }}
                >
                 Admin
                  
                </NavLink>
              </Button>
            <Button 
              size='small'
              onClick={handleClick}
              sx={{ 
                color: '#fff', 
                fontFamily: 'Montserrat',
                fontWeight: 'bold', 
                fontSize: '1rem',
                border: 'solid 1px white',
              }}
            >
              Logout
            </Button>
            </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
