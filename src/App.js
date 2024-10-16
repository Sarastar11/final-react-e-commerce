import React from 'react';
import GoogleFonts from 'react-google-fonts';
import './App.css';
import CartProvider from './Features/CartContext';
const Main = React.lazy(() => import('./Components/components/Main/Main'));
const Navbar = React.lazy(() => import('./Components/components/Navbar/Navbar'));
const Sponsors = React.lazy(() => import('./Components/components/Sponsors/Sponsors'));
const Footer = React.lazy(() => import('./Components/components/Footer/Footer'));
function App() {
  return (
    <CartProvider>
    <div className="App" style={{ background: 'rgba(247, 246, 244, 1)'}}>

      <GoogleFonts font="Taviraj" />
     
      <React.Suspense fallback={<div>Loading...</div>}>
       
        <Navbar />
        <Main />
        <Sponsors />
        <Footer />
       
      </React.Suspense>

    </div>

 </CartProvider>
  );
}

export default App;
