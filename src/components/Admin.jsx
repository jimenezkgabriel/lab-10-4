import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useAuth } from '../context/AuthContext'

export default function Admin() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Page
        </Typography>
        <Typography variant="body1" component="p" mb={2}>
          This is a protected area that only appears when simulated authentication is active.
        </Typography>
        <Button variant="outlined" onClick={handleLogout}>
          Log Out
        </Button>
      </Box>
    </Container>
  )
}
