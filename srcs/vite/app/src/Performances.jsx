import React from 'react';
import './Performances.css';

const Performances = () => {
  return (
    <section className="performances">
      <div id="performance_container">
        <div className="performance_content">
          <img href=""></img>
        </div>
        <div className="performance_content">
          <div className="perfNumber">70% Accuracy Model</div>
          <div className="perfPresent">
            <div className="perfDesc">
              Based on Instageo from Instadeep, utilizing advanced AI to retrieve high-resolution satellite imagery for precise geospatial analysis.
              <ul>
                <li>Built with advanced AI algorithms for satellite image processing.</li>
                <li>Retrieves high-resolution satellite images for accurate geospatial analysis.</li>
                <li>Optimized for real-time data acquisition and analysis.</li>
                <li>Scalable architecture for large-scale geographical applications.</li>
                <li>Tech stack to be finalized, currently considering frameworks such as <strong>[Insert Framework/Tool Here]</strong> for <strong>[Insert Purpose]</strong>.</li>
              </ul>
            </div>
            <div className="perfDesc">
              Full front-end and back-end integration (Streamlit, ViteJS, React, Flask, Nginx) within a containerized Docker environment, fully ready for seemless deployment in production.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;
