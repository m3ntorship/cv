import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { Container, CONTAINER_OPTIONS } from '../shared/container';

export const UpdatedPosts = () => {
  const [data, setData] = useState();
  useEffect(() => {
    API('/updatedPosts').then(({ data }) => {
      setData(data);
    });
  }, []);

  if (data) {
    return (
      <Container
        padding={CONTAINER_OPTIONS.PADDING.DEFAULT}
        margin={CONTAINER_OPTIONS.MARGIN.TOW_SIDES}
      >
        <Heading
          as="h2"
          color={HEADING_OPTIONS.COLOR.PRIMARY}
          className="mb-12 text-center  col-start-1 col-end-4"
        >
          {data.postsHeader}
        </Heading>
        <div className="grid gap-x-6 gap-y-6   grid-cols-1  md:grid-cols-2  lg:grid-cols-3 ">
          {data.posts.map(({ title, userName, likes, comments, id }) => {
            return (
              <div className="bg-c400 p-6 block" key={id}>
                <Heading
                  as="h4"
                  fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL}
                  hasLineHeight={false}
                >
                  {title}
                </Heading>
                <img
                  src="https://picsum.photos/500/400"
                  alt="Post update"
                  className="rounded-md my-8"
                />
                <div className="flex justify-between items-center text-c300">
                  <figure className="flex items-center ">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Profile"
                      className="w-10 h-10 inline rounded-full mr-4"
                    />
                    <figcaption className="inline">{userName}</figcaption>
                  </figure>
                  <div>
                    <ul className="flex">
                      <li>
                        <a href="/">
                          <img
                            src={data.heartImg}
                            alt="Heart Icon"
                            className="w-4 inline ml-1 border-c300"
                          />
                        </a>
                        <span className="ml-1">{likes}</span>
                      </li>
                      <li className="ml-10">
                        <a href="/">
                          <img
                            src={data.CommentImg}
                            alt="Comment Icon"
                            className="w-4 inline ml-1"
                          />
                        </a>
                        <span className="inline ml-1">{comments}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  } else {
    return 'Loading Broken';
  }
};

export default UpdatedPosts;
