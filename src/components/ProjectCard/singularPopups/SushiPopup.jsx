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
    label: 'Introductory log in screen',
    imgPath:
      '/login_screen.jpg',
    description: 'Non-logged-in users will be automatically redirected to here, asking the user to log in'
  },
  {
    label: 'Register screen',
    imgPath:
      '/register_screen.jpg',
    description: 'If a user has yet to create an account they can do so from this screen'
  },
  {
    label: 'Main ordering screen - client side',
    imgPath:
      '/client_main_page.jpg',
    description: `If a regular customer created an account and they log in they will see this following screen`
  },
    {
    label: 'Add prodct pop-up',
    imgPath:
      '/client_adding_product.jpg',
    description: `The user may add products to their cart, choosing the amount in the process with the price changing accordingly`
  },
  {
    label: 'Search product by name function',
    imgPath:
      '/search_bar.jpg',
    description: 'A user may also use the search bar to look for products and will also be presented with auto completes of the currently available prodcuts'
  },
  { 
    label: 'Search product by category function',
    imgPath: '/categories.jpg',
    description: `Alternatively a user can search for a product by the existing product categories, inculding filtering by items that are currently marked as hot or new`
  },
  {
    label: 'Cart drawer',
    imgPath:
      '/cart_drawer.jpg',
    description: 'A user may at any time open the side drawer indicated by a cart icon to see or change the content of their cart'
  },
  {
    label: 'Checkout order screen',
    imgPath:
      '/order_screen.jpg',
    description: 'Once the user clicks move to checkout they will get to see the summarization of their purchase and once they fill out the delivery destination they may choose to download a reciept'
  },
  {
    label: 'Order recieved',
    imgPath:
      '/success_ordering.jpg',
    description: 'If the user information is all correct a user will be notified of their order being recieved and the order summary will be saved in the mongoDB server'
  },
  {
    label: 'Admin main page',
    imgPath:
      '/admin_main_page.jpg',
    description: 'In addition to the user experience, if an admin logs in to the site they will see the following main page'
  },
  {
    label: 'Admin edit or remove product function',
    imgPath:
      '/admin_main_page.jpg',
    description: 'An admin can change a products name, price or even remove a product from the listing'
  },
  {
    label: 'Admin add a product function',
    imgPath:
      '/admin_add_product.jpg',
    description: 'An admin also has the privilege to add products to the site, all changes by admins get saved in the mongoDB server and affect future visits to the site'
  },

];

function SushiPopup() {
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

export default SushiPopup