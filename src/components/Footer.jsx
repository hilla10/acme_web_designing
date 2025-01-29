import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-red-500 text-white text-center py-6'>
      <p>Acme Web Design, Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
