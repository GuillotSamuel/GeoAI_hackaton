import React from 'react';
import './Model.css';

const Model = ({ closeModel }) => {
  return (
    <section id="model">
      <button id="closeModelButton" onClick={closeModel}>
        Close
      </button>
      <iframe
          src="http://localhost:8079"
          width="100%"
          height="100%"
          title="Instageo App"
          frameBorder="0"
        />
    </section>
  );
};

export default Model;
