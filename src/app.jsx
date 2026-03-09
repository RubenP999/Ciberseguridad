import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx'; 
import Loader from './components/loader.jsx';

// Usamos "lazy loading" (carga perezosa). 
// Esto optimiza tu web y permite que el loader aparezca entre páginas.
const Home = lazy(() => import('./pages/home.jsx')); 
const Importancia = lazy(() => import('./pages/important.jsx')); 
const Pilares = lazy(() => import('./pages/pilares.jsx'));
const Taxomania = lazy(() => import('./pages/taxomania.jsx')); 
const Redes = lazy(() => import('./pages/redes.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      
      {/* Suspense detecta cuando una página está cargando y muestra el fallback (el Loader) */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/importancia" element={<Importancia />} />
          <Route path="/pilares" element={<Pilares />} />
          <Route path="/taxonomia" element={<Taxomania />} />
          <Route path="/redes" element={<Redes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}