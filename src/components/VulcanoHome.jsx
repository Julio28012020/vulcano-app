import React from 'react';
import '../App.css';
import VulcanoFooter from './VulcanoFooter';

const logoVideo = '/videos/Logo.mp4';
const vulcanoIcon = '/Icons/Vulcano_Icon-removebg-preview.png';

const VulcanoHome = () => {
  return (
    <div className="vh-container">
      <nav className="vh-navbar">
        <div className="vh-nav-content">
          <div className="vh-logo"><img src={vulcanoIcon} alt="Vulcano Icon" className="vh-logo-icon" /> VULCANO APP</div>
          <div className="vh-lang">IDIOMA DEL SITIO: ESPAÑOL ▾</div>
        </div>
      </nav>

      <main className="vh-hero">
        <div className="vh-hero-content">
          <div className="vh-lava-circle">
             <video className="vh-mascot" autoPlay loop muted playsInline>
               <source src={logoVideo} type="video/mp4" />
               Tu navegador no soporta videos.
             </video>
          </div>

          <div className="vh-text-side">
            <h1 className="vh-title">
              ¡La forma divertida y eficaz de aprender sobre programación!
            </h1>
            
            <div className="vh-button-group">
              <button className="vh-btn-primary">EMPIEZA AHORA</button>
              <button className="vh-btn-secondary">YA TENGO UNA CUENTA</button>
            </div>
          </div>
        </div>
      </main>
      
      <VulcanoFooter />

    </div>
  );
};

export default VulcanoHome;