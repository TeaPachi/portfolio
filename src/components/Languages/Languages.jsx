import { Box, Typography } from '@mui/material';
import React from 'react';
import Projects from '../../pages/Projects/Projects';
import LinearProgressWithLabel from '../../utils/progressBar/BarWithLabel';
import './Languages.css';

const Languages = () => {
  return (
    <div id="about">
    <br/> <br/> <br/> <br/> <br/>
        <Box className="language-container" >
            <div className="front-end-wrapper" >
                <div className="front-end-container"> 
                    <Typography variant="h4" element="h4" className="front-end-title" align='center'>Front End</Typography>
                    <div className="language-progress-container">
                        <div className="language-progress-wrapper">
                            <span>HTML</span>
                            <LinearProgressWithLabel value={90} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>CSS</span>
                            <LinearProgressWithLabel value={90} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>React</span>
                            <LinearProgressWithLabel value={85} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>JavaScript</span>
                            <LinearProgressWithLabel value={70} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>Git</span>
                            <LinearProgressWithLabel value={70} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="front-end-wrapper" >
                <div className="front-end-container"> 
                    <Typography variant="h4" element="h4" className="back-end-title" align='center'>Back End</Typography>
                    <div className="language-progress-container">
                        <div className="language-progress-wrapper">
                            <span>Node.JS</span>
                            <LinearProgressWithLabel value={80} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>Express</span>
                            <LinearProgressWithLabel value={75} color="secondary"/>
                        </div>
                        <div className="language-progress-wrapper">
                            <span>MongoDB</span>
                            <LinearProgressWithLabel determinate variant="outlined" color="#000" size="sm" thickness={32} value={75} />
                        </div>
                        <div className="language-progress-wrapper">
                            <span>SQL</span>
                            <LinearProgressWithLabel value={50} />
                        </div>
                    </div>
                </div>
            </div>
        </Box>
        <Projects/>
    </div>
  )
}

export default Languages