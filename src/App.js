import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/Theme';

function App() {
  return (
    <BrowserRouter className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
