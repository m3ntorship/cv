import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Container, CONTAINER_OPTIONS } from '../shared/container';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';

const BestDesignQuality = () => {
  const [bestDesign, setBestDesign] = useState();
  useEffect(() => {
    API('/bestDesign').then(({ data }) => {
      setBestDesign(data);
    });
  }, []);
  if (bestDesign) {
    const images = bestDesign.imagesURL.map((image, i) => {
      if (i === 0 || i === 1) return null;
      const { id, url } = image;
      return (
        <img
          key={id}
          className="object-cover border-4 border-c1000"
          src={url}
          alt="mock"
        />
      );
    });

    return (
      <Container
        margin={CONTAINER_OPTIONS.MARGIN.TOP}
        isBgGray
        className="text-c300"
        padding={CONTAINER_OPTIONS.PADDING.MOB_PADDING}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 justify-center">
          <div className="flex flex-col justify-center">
            <Heading
              color={HEADING_OPTIONS.COLOR.SECONDARY}
              fontSize={HEADING_OPTIONS.FONT_SIZES.SMALL}
              className="mb-6"
              as="h2"
            >
              {bestDesign.title}
            </Heading>
            <p className="mt-2 font-headings font-medium italic text-lg relative">
              {bestDesign.details}
              <span
                className="absolute left-0 hidden lg:block"
                style={{
                  top: '150px'
                }}
              >
                <img src={bestDesign.imagesURL[1].url} alt="" />
              </span>
            </p>
          </div>
          <div className="flex justify-center mx-auto mt-10 lg:mt-0 relative">
            <img
              style={{ width: '28rem' }}
              src={bestDesign.imagesURL[0].url}
              alt=""
            />
            <div className="absolute bottom-0 grid grid-cols-3 gap-2 justify-around mx-3 mb-3">
              {images}
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default BestDesignQuality;
