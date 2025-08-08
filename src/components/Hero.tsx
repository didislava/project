import React from 'react';
import plusIcon from '../assets/plus2.png';
import mainImage from '../assets/main-page-img.png';

const Hero: React.FC = () => {
  const breadcrumbItems = [
    { text: 'Onix', hasIcon: true },
    { text: 'Case Studies', hasIcon: true },
    { text: 'Switzerland Living Cost Calculator', hasIcon: false }
  ];

  return (
    <div className="hero-container">
      <ul className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            <a className="breadcrumb-link" href="">
              <span className="breadcrumb-text text">{item.text}</span>
              {item.hasIcon && <img 
                src={plusIcon} 
                className="icon-plus-right" 
                width="20" 
                height="20" 
                alt="Breadcrumb icon"
              />}
            </a>
          </li>
        ))}
      </ul>

      <h1 className="hero-title title">
        Cost Comparison Platform to Help Weigh Up Municipalities in Switzerland
      </h1>
      <img 
        src={mainImage}
        width="798" 
        height="595" 
        alt="Main page showing Switzerland cost comparison platform interface" 
        className="main-page-img" 
      />
    </div>
  );
};

export default Hero;
