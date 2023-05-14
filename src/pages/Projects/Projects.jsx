import { Typography, Grid, Box, Button } from '@mui/material';
import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {

  return (
    <Box align="center" className="projects-wrapper" id="projects">
      <Typography variant="h3" element="h3" className="projects-title" align="center">My recent work</Typography>
      <Grid className="projects-container">
        <ProjectCard/>
      </Grid>
      <Box className="github-link-wrapper">
        <Button href="https://github.com/TeaPachi" className="link-to-github" align="right">See more projects →</Button>
      </Box>
    </Box>
  )
}

export default Projects