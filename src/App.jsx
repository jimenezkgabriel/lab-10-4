import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import BlogIndex from './components/BlogIndex'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Blog
            </Typography>
            <Button color="inherit" component={Link} to="/blog">
              Blog
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Routes>
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/" element={<BlogIndex />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
