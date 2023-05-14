import { Box, Card, CardMedia, CardContent, Link, Button, Dialog, DialogTitle } from '@mui/material';
import React, {useState} from 'react';
import CalcPopup from '../ProjectCard/singularPopups/CalcPopup';
import SushiPopup from './singularPopups/SushiPopup';
import './ProjectCard.css'

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
            component="img"
            className="project-image-thumbnail"
            height="200" 
            width="140"
            image={`http://localhost:3000/calculator_thumbnail.jpg`}
            alt={`a thumbnail previewing a calculator app`}
            />
            <CardContent>
                <Button onClick={openCalcPopupFunc} align="center" className="project-link" style={{fontSize: "17px"}}>pure JS Calculator - click to learn more</Button>
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
            <CardMedia
                component="img"
                className="project-image-thumbnail"
                height="200" 
                width="140"
                image={`http://localhost:3000/gainguard_thumbnail.jpg`}
                alt={`a thumbnail previewing the Gain Guard website`}
                />
            <CardContent>
                <Link href="https://www.gainguard.io" target="_blank" rel="noreferrer" align="center" className="project-link">Visit Gain Guard</Link>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 390, maxWidth: 400, minHeight: 200, maxHeight: 260 }} className="project-card-wrapper">
        <CardMedia
            component="img"
            className="project-image-thumbnail"
            height="200" 
            width="140"
            image={`http://localhost:3000/sushibar-thumbnail.jpg`}
            alt={`a thumbnail previewing the Sushibar ecommerce website`}
            />
        <CardContent>
            <Button onClick={openSushiPopupFunc} align="center" className="project-link" style={{fontSize: "16px"}}>Ecommerce Sushi Bar - click to learn more</Button>
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