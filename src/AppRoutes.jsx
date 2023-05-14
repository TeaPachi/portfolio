import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Page404 from './pages/Page404/Page404';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Page404/>}/>
        {/* could add a /heb for hebrew text? that or useState on a language and according to the state render different text in each component */}
    </Routes>
  )
}

export default AppRoutes