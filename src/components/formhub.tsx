import React, { useEffect } from 'react';

const HubSpotFormTrabalhe: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45980958',
          formId: 'b5d36dc6-2c20-46e1-ad0f-a405beae9c21',
          target: '#hubspotFormContainer'
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotFormContainer"></div>;
};

export default HubSpotFormTrabalhe;
