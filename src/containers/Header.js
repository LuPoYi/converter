import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3">Converter</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
