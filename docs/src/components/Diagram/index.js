import React, { useState, useEffect } from 'react';

import './styles.css';

function Diagram({ height, width }) {
  const [, updateState] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateState({});
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!height) {
    height = '294px';
  }

  if (!width) {
    width = '900px';
  }

  return (
    <svg
      height="294px"
      className="diagram"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <g className="logo">
        <g id="mic">
          <path
            d="M794.64,402a45.58,45.58,0,0,1-7.58-.85l-.62-.16c-.82-.24-1.52-.64-1.53-1.59s.69-1.38,1.5-1.62a22.25,22.25,0,0,1,5.06-.74,25.56,25.56,0,0,0,12.75-3.87,19.42,19.42,0,0,0,7.51-9.24l.09-.26c.32-1,.7-2,2-2a2.47,2.47,0,0,1,2.3,1.95,11.26,11.26,0,0,1-1.94,11.62,17.36,17.36,0,0,1-11.24,6A82.8,82.8,0,0,1,794.64,402Z"
            transform="translate(-745.87 -324.61)"
            fill="#000"
          />
        </g>
        <g id="eyes">
          <path
            d="M782.19,384.86c-1.57-.2-3-.05-4.44-.3a7.84,7.84,0,0,1-6-4.73,12.81,12.81,0,0,1-1.07-8.91c.87-3.5,3.75-5,6.93-3.36A35,35,0,0,1,789.15,377c1.15,1.46,1.68,3.07.72,4.86a5.08,5.08,0,0,1-4.43,2.81Z"
            transform="translate(-745.87 -324.61)"
            fill="#000"
          />
          <path
            d="M802.71,385.26a39.86,39.86,0,0,1-7.68-1.19,5.09,5.09,0,0,1-1.84-1,3.38,3.38,0,0,1-.25-5.4,11.53,11.53,0,0,1,3.42-2.27,37.3,37.3,0,0,1,8.56-2.92,4.6,4.6,0,0,1,5.71,4.91,8.5,8.5,0,0,1-5.3,7.5A7.77,7.77,0,0,1,802.71,385.26Z"
            transform="translate(-745.87 -324.61)"
            fill="#000"
          />
        </g>
        <g id="headset">
          <path
            d="M768.21,371c0,2-.05,4,0,6,.09,2.75-2,3.33-3.82,3-4.18-.63-6.41-3.21-6.49-7.44,0-1.38,0-2.76,0-4.13.12-2.72,1.05-5,3.56-6.42a1.32,1.32,0,0,0,.67-1,27.38,27.38,0,0,1,4.54-10.54.82.82,0,0,0,.15-.84,2.27,2.27,0,0,1,.53-2.38,28.2,28.2,0,0,1,16.26-9.64,36,36,0,0,1,6.79-.94,29.88,29.88,0,0,1,17.94,5.78,42.6,42.6,0,0,1,4.76,4c.9.88,1.53,1.86,1,3.19a.81.81,0,0,0,.19.76,27.59,27.59,0,0,1,4.56,10.63,1.17,1.17,0,0,0,.61.85A6.8,6.8,0,0,1,823,368a34,34,0,0,1-.08,6.3,6.77,6.77,0,0,1-7.87,5.65,2.6,2.6,0,0,1-2.21-2.92c0-3.5.06-7,0-10.48-.2-8.41-3.89-14.8-11.14-19.13-11.09-6.62-25.74-1.87-31.31,9.69a20.28,20.28,0,0,0-2.09,8.86V371Z"
            transform="translate(-745.87 -324.61)"
            fill="#000"
          />
        </g>
      </g>
    </svg>
  );
}

export default Diagram;
