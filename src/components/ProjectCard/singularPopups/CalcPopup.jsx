import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Introductory home screen',
    imgPath:
      '/calculator_thumbnail.jpg',
    description: 'non logged in users will be automatically navigated here with an alert asking the user to log in'
  },
  {
    label: 'Calculator screen, Blue UI selected by user',
    imgPath:
      '/calculator_slide1.jpg',
    description: 'this screen can only be accesed by a logged in user with a token, user may now use calculator to do simple calculations'
  },
  {
    label: 'Calculator screen, Green UI selected by user',
    imgPath:
      '/calculator_slide2.jpg',
    description: `this screen can only be accesed by a logged in user with a token, user may now use calculator to do simple calculations`
  },
    {
    label: 'Calculator screen, purple UI selected by user',
    imgPath:
      '/calculator_slide4.jpg',
    description: `this screen can only be accesed by a logged in user with a token, user may now use calculator to do simple calculations`
  },
  {
    label: 'Calculator screen, red UI selected by user',
    imgPath:
      '/calculator_slide5.jpg',
    description: 'this screen can only be accesed by a logged in user with a token, user may now use calculator to do simple calculations'
  },
  { 
    label: 'Example for limitation chosen when creating the site',
    imgPath: '/calc_script.jpg',
    description: `results are calculated with functions written to occur in 
    javascript only using javascript\'s built in + and - operators to create multiplication, division, exponents etc.`
  },
  {
    label: 'Results screen',
    imgPath:
      '/calculator_slide3.jpg',
    description: 'once you click finish on the calculator you are presented with all your calculations, you can choose to add more before you share them with friends'
  },

];

function CalcPopup() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
        <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 70,
            pl: 3,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div>
                  <Box
                    component="img"
                    sx={{
                      height: 420,
                      display: 'block',
                      maxWidth: 900,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                  <Typography sx={{ pl: 1, pr: 1 ,pt: 2 }} align="center">{step.description}</Typography>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  )
}

export default CalcPopup