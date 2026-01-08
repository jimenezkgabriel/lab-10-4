import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { getAllPosts } from '../posts'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blogs
        </Typography>

        <List>
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <ListItemButton component={RouterLink} to={`/lab-10-4/${post.slug}`}>
                <ListItemText primary={post.title} secondary={post.slug} />
              </ListItemButton>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  )
}
