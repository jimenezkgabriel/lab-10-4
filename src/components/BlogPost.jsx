import React from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { getPostBySlug } from '../posts'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        {post ? (
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {post.content}
              </Typography>
              <Button component={RouterLink} to="/blog" variant="outlined">
                Back to Blog
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div>
            <Typography variant="h5" component="h2" color="error" gutterBottom>
              Post not found
            </Typography>
            <Button component={RouterLink} to="/blog" variant="outlined">
              Back to Blog
            </Button>
          </div>
        )}
      </Box>
    </Container>
  )
}
