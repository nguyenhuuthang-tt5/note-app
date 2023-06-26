import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

export default function UserMenu(props) {
    const { user } = useContext(AuthContext)
    const [anchorEL, setAnchorEL] = useState(null)
    const open = Boolean(anchorEL)

    const handleLogout = () => {
        user.auth.signOut()
    }
    const handleClose = () => {
        setAnchorEL(null)
    }
    const handleClick = (e) => {
        setAnchorEL(e.currentTarget)
    }
    return (
        <>
            <Box sx={{ display: 'flex' }} onClick={handleClick}>
                <Typography>{ user.displayName }</Typography>
                <Avatar alt='avatar' src={user.photoURL}
                    sx={{  width: 24, height: 24, ml: '5px'}}
                ></Avatar>
            </Box>
            <Menu id='basic-menu' anchorEl={anchorEL} open={open} onClose={handleClose}>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
}