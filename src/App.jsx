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
import Login from './components/Login'
import Admin from './components/Admin'
import { AuthProvider, useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppFrame />
      </AuthProvider>
    </BrowserRouter>
  )
}

function AppFrame() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Blog
            </Typography>

            <Button color="inherit" component={Link} to="/lab-10-4">
              Home
            </Button>

            {!isAuthenticated ? (
              <Button color="inherit" component={Link} to="/login">
                Log In
              </Button>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/admin">
                  Admin
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  Log Out
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Routes>
          <Route path="/lab-10-4" element={<BlogIndex />} />
          <Route path="/lab-10-4/:slug" element={<BlogPost />} />

          {/* also provide blog-style routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/" element={<BlogIndex />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
