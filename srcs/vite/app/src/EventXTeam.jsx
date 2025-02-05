import React from 'react';
import './EventXTeam.css';
import instadeep from './assets/instadeep.png';
import datacraft from './assets/datacraft.png';
import sguillot from './assets/sguillot.png';
import gluca from './assets/gluca.png';
import hmidoun from './assets/hmidoun.png';
import tburtin from './assets/tburtin.png';

const EventXTeam = () => {
  return (
    <section className="eventXTeam">
      <div id="eventXTeam_container">
        <div className="eventXTeam_content logo_container">
          <img src={instadeep} alt="InstaDeep" id="instadeep"/>
          <img src={datacraft} alt="DataCraft" id="datacraft"/>
        </div>
        <div className="eventXTeam_content" id="x">
          X
        </div>
        <div className="eventXTeam_content">
          <div id="team_container">
            <div className="profile profile-2">
              <img src={hmidoun} alt="Hocine Midoune" className="profile-img"/>
              <div className="profile-text"><div class="heavy">Hocine Midoune</div> Data scientists: always probing!</div>
            </div>
            <div className="profile">
              <img src={gluca} alt="Guillaume de Luca" className="profile-img"/>
              <div className="profile-text"><div class="heavy">Guillaume de Luca</div> PhD? More like AI wizard!</div>
            </div>
            <div className="profile">
              <img src={sguillot} alt="Samuel Guillot" className="profile-img"/>
              <div className="profile-text"><div class="heavy">Samuel Guillot</div> Life’s better in containers!</div>
            </div>
            <div className="profile profile-2">
              <img src={tburtin} alt="Thomas Burtin" className="profile-img"/>
              <div className="profile-text"><div class="heavy">Thomas Burtin</div> The Apprentice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventXTeam;
