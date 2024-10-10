import React, { useEffect } from 'react';

const HubSpotForm: React.FC = () => {
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
          formId: '4d097cb9-4974-4fa6-8aeb-202e8f8880dd',
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

export default HubSpotForm;
