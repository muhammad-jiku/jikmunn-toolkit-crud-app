import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by Muhammad Azizul Hoque Jiku @{year}</p>
    </footer>
  );
};

export default Footer;
