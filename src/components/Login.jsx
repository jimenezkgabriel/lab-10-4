import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    login()
    navigate('/admin')
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Log In
        </Typography>
        <Typography variant="body1" paragraph>
          Click the button to simulate logging in.
        </Typography>
        <Button variant="contained" onClick={handleLogin}>
          Log In
        </Button>
      </Box>
    </Container>
  )
}
