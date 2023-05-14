import { Typography, Box, Grow } from '@mui/material'
import React from 'react'
import Languages from '../../components/Languages/Languages';
import './About.css';

const About = () => {
  return (
    <div className="about-container" >
      <div className="about-me-container">
          {/*about me*/}
          <div className="left-intro">
            <Typography color="var(--text1)" variant="h1" className="site-title">Full Stack <br/> Web Developer</Typography>
            <Box>
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true) && { timeout: 1000 }}
              >
                <Typography element="p" className="about-me-txt">
                  Hi, I'm <span>Milena</span>! a junior fullstack developer <br/> 
                  with a passion for website design, <br/>
                  after 2 years of internship experience coding, <br/>
                  I'm motivated and excited to begin my first <br/>
                  proper fullstack developer position!
                </Typography>
              </Grow>
            </Box>
          </div>
      </div>
      <Languages/>
    </div>
  )
}

export default About