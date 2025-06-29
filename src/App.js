import React from 'react';
import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import Footer from './components/Footer';

/**
 * Main App component that renders the complete digital business card.
 * It acts as a container for all the card's sections.
 */

export default function App(){
  return(
    // The main container for the entire business card
        <div className="card-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
  );
}
