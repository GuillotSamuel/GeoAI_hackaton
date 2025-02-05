import React, { useState } from 'react';
import './Presentation.css';
import pPlusS from './assets/p+s.png';
import Model from './Model.jsx';
import background1 from './assets/background1.png';

const Presentation = () => {
  const [modelVisible, setModelVisible] = useState(false);
  const handleToggleModel = () => {
    setModelVisible(!modelVisible);
  };

  const handleCloseModel = () => {
    setModelVisible(false);
  };

  return (
    <section className="presentation">
      <img src={background1} id="background1"></img>
      <div id="presentation_container">
        <div className="presentation_content" id="pPlusS_container">
          
        </div>
        <div className="presentation_content">
          <div className="intro_container glassmorphism">
            <div className="intro">
              Instageo cutting-edge early warning AI model revolutionizes desert locust control. Using AI and satellite data, it predicts breeding hotspots across continents, empowering rapid action to protect agriculture and global food security.
            </div>
            <button className="goToModel" id="toggleButton" onClick={handleToggleModel}>Use the Model</button>
          </div>
        </div>
      </div>

      {modelVisible && <Model closeModel={handleCloseModel} />}

    </section>
    
  );
};

export default Presentation;
