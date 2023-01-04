import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Header({ onClick }: { onClick?: () => void}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{justifyContent: "space-around", alignItems: "center", alignContent: "space-around"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      PROGRAMA SAÚDE DA FAMÍLIA
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;