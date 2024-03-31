import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-400 to-blue-500 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center text-lg font-semibold">
          &copy; {new Date().getFullYear()} Yasir's Weather App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
