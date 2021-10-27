import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import "./NavBar.css";
import MenuComponent from '../Menu/MenuComponent';


function NavBar() {
  return (
    <div>
      <AppBar position="fixed" className="cor-nav-bar"
      >
        <Toolbar>
          <Box display="flex" alignItems="center">
          <MenuComponent/>
            <Box mb={1}>
              <h4> BlogPessoal</h4>
            </Box>
          </Box>

          <Box ml="auto">
            <input type="text" placeholder="search" className="input-style" />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
