import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CatProvider from './context/CatContext.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Information from './components/others/Information.tsx';
import PhotoProvider from './context/PhotoContext.tsx';
import MostSearched from './components/others/MostSearched.tsx';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        
        <Route
          path='/:id'
          element={
            <PhotoProvider>
              <Information />
            </PhotoProvider>
          }
        />
        <Route path='/mostsearched' element={<MostSearched />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CatProvider>
      <Root />
    </CatProvider>
  </React.StrictMode>
);
