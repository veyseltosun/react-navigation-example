import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const style = { textDecoration: "none" }
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"white"}}>
                <Toolbar>

                    <Link to="/colorScreen/red" style={style} >
                        <Button color="inherit">Red</Button>

                    </Link>
                    <Link to="/colorScreen/green" style={style} >

                        <Button color="inherit">Green</Button>

                    </Link>

                    <Link to="/colorScreen/blue" style={style} >

                        <Button color="inherit">Blue</Button>

                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar