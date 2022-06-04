import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Hidden,
  Button,
  Link,
} from '@mui/material';

import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem component={RouterLink} to="settings" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem component={RouterLink} to="recommend" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Recommend" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Hidden only={['lg', 'xl']}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link component={RouterLink} style={{ color: 'white' }} to="/">
                Movies recommendation
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Button
                component={RouterLink}
                to="settings"
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Settings
              </Button>
              <Button
                component={RouterLink}
                to="recommend"
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Recommend
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
          {list()}
        </Drawer>
      </Box>
    </>
  );
};

export default Navigation;
