import React from 'react';
import { Button } from '../shared/button';

const EstimateSection = () => {
  return (
    <section
      className="estimate__section_bg py-32 text-c200"
      style={{
        backgroundImage: 'url(https://i.imgur.com/lSvq0BZ.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '92% 100%',
        backgroundPosition: '170px 0'
      }}
    >
      <div className="container">
        <span className="text-lg">Estimate your project!</span>
        <h6 className="text-xxlg my-12" style={{ fontFamily: 'PT serif' }}>
          Have Any Project On Mind
        </h6>
        <Button
          bgColor="c100"
          rounded={true}
          customClassNames="my-4 block w-56 h-16"
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default EstimateSection;
