import React from 'react';

const AwardLogo = () => {
  const handleCircleClick = (event) => {
    if (event.target.nodeName.toLowerCase() !== 'a') {
      window.open(document.querySelector('.sq_center').href);
      return 0;
    }
  };

  return (
    <div id="circle_v2" className="" onClick={handleCircleClick}>
      <div className="data_test arc-heading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160">
          <defs>
            <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path>
          </defs>
          <text className="arc-heading__heading" fill="#000" textAnchor="middle">
            <textPath startOffset="50%" xlinkHref="#heading-arc">Recommended</textPath>
          </text>
        </svg>
      </div>
      <div className="sq_year">2023</div>
      <a href="https://restaurantguru.com/Im-Aim-Thai-Cuisine-Dannevirke-Dannevirke" className="sq_center f8" target="_blank">
        Im-Aim Thai Cuisine - Dannevirke
      </a>
      <div className="arc-heading arc-heading__bottom">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120">
          <defs>
            <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path>
          </defs>
          <text className="arc-heading__subheading" fill="#000" textAnchor="middle">
            <textPath startOffset="50%" xlinkHref="#subheading-arc">
              <a href="https://restaurantguru.com" target="_blank">Restaurant Guru</a>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default AwardLogo;
