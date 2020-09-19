import React from 'react';
import { Button } from './../shared/button/index.js';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { useEffect, useState } from 'react';
import { API } from '../../modules/apis';

// import { Navbar } from './../../components/Navbar/index.jsx';

const Header = () => {
  const [data, setData] = useState();
  useEffect(() => {
    API('/header').then(({ data }) => {
      setData(data);
    });
  }, []);
  if (data) {
    return (
      <header className=" w-full  bg-c400  border-c100 border-b-4 pb-32">
        <div className="container flex flex-row pt-64 relative">
          <div className="  mt-16  ">
            <div className="  ">
              <span className=" text-c100 font-body text-xxlg font-medium leading-1 ">
                I am
              </span>
              <Heading as="h1" fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}>
                {data.heading}
              </Heading>
              <p className="text-c300 font-body leading-2 text-lg mb-8 ">
                {data.paragraph}
              </p>
            </div>

            <div className="  ">
              <Button
                rounded={true}
                customClassNames="w-56 h-16 mr-4"
                bgColor="c100"
              >
                {data.webServicesButton.title}
              </Button>
              <Button
                rounded={true}
                customClassNames="w-56 h-16"
                bgColor="c200"
              >
                {data.recentWorkesButton.title}
              </Button>
            </div>
          </div>

          <div className="w-1/2 mb-8 pb-8 ">
            <img
              src={data.dotsUrl}
              alt=""
              className=" absolute  mb-32   transform  translate-x-4  -translate-y-8   "
            />
            <img
              src={data.avatarUrl}
              alt=""
              className=" object-cover w-60 h-60 relative rounded-full border-8 border-white ml-16 z-10 "
            />
          </div>
        </div>
      </header>
    );
  } else {
    return 'HI';
  }
};

export default Header;
