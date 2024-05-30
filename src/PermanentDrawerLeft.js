import React from 'react';
import { useAuth } from './AuthContext';
import { logout } from './AuthService';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Marketplace from './Marketplace';
import Guide from './Guide';
import Gym from './Gym';
import Yoga from './Yoga';

function PermanentDrawerLeft() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (!currentUser) {
        return null;
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    },
                }}
            >
                <div>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Welcome, {currentUser.email}
                        </Typography>
                    </Toolbar>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/marketplace">
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Marketplace" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/guide">
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Guide" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                    sx={{ m: 2 }}
                >
                    Logout
                </Button>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Typography paragraph>This is the main content area.</Typography>} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/gym" element={<Gym />} />
                    <Route path="/yoga" element={<Yoga />} />
                </Routes>
            </Box>
        </Box>
    );
}

export default PermanentDrawerLeft;
