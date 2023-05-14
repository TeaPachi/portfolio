import { Box, Card, CardMedia, CardContent, Link, Button, Dialog, DialogTitle, Typography } from '@mui/material';
import React, {useState} from 'react';
import CalcPopup from '../ProjectCard/singularPopups/CalcPopup';
import SushiPopup from './singularPopups/SushiPopup';
import './ProjectCard.css';

const ProjectCard = () => {
    const [ openCalcPopup, setOpenCalcPopup ] = useState(false);
    const [ openSushiPopup, setOpenSushiPopup ] = useState(false);

    function openCalcPopupFunc() {
        setOpenCalcPopup(true)
    }

    function openSushiPopupFunc() {
        setOpenSushiPopup(true)
    }

    const handleClosePopup = () => {
        setOpenCalcPopup(false);
        setOpenSushiPopup(false)
    };

  return (
    <Box className="project-cards-container">
        <Card sx={{ minWidth: 390, maxWidth: 400, minHeight: 200, maxHeight: 260 }} className="project-card-wrapper">
            <CardMedia
                onClick={openCalcPopupFunc} 
                component="img"
                className="project-image-thumbnail"
                height="200" 
                width="140"
                image={`/calculator_thumbnail.jpg`}
                alt={`a thumbnail previewing a calculator app`}
                style={{cursor: 'pointer'}}
            />
            <CardContent>
                <Button align="center" className="project-link" style={{fontSize: "17px"}}>Learn more about Pure JS Calculator</Button>
                <Dialog
                open={openCalcPopup}
                onClose={handleClosePopup}
                maxWidth='80%'
                >
                    <CalcPopup/>
                </Dialog>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 390, maxWidth: 400, minHeight: 200, maxHeight: 260 }} className="project-card-wrapper">
            <Link href="https://www.gainguard.io" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <CardMedia
                    component="img"
                    className="project-image-thumbnail"
                    height="200" 
                    width="140"
                    image={`/gainguard_thumbnail.jpg`}
                    alt={`a thumbnail previewing the Gain Guard website`}
                    style={{cursor: 'pointer'}}
                    
                />
                <CardContent>
                    <Typography align="center" className="project-link" fontSize="20px">Visit Gain Guard</Typography>
                </CardContent>
            </Link>
        </Card>
        <Card sx={{ minWidth: 390, maxWidth: 400, minHeight: 200, maxHeight: 260 }} className="project-card-wrapper">
            <CardMedia
                onClick={openSushiPopupFunc}
                component="img"
                className="project-image-thumbnail"
                height="200" 
                width="140"
                image={`/sushibar-thumbnail.jpg`}
                alt={`a thumbnail previewing the Sushibar ecommerce website`}
                style={{cursor: 'pointer'}}
                />
            <CardContent>
                <Button align="center" className="project-link" style={{fontSize: "16px"}}>Learn more about Ecommerce Sushi Bar </Button>
                <Dialog
                    open={openSushiPopup}
                    onClose={handleClosePopup}
                    maxWidth='80%'
                    >
                    <SushiPopup/>
                </Dialog>
            </CardContent>
        </Card>
    </Box>
  )
}

export default ProjectCard