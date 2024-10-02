import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #6bcddd, #de42f5)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '5rem', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '0' }}>Page Not Found</h2>
      <p style={{ margin: '20px 0' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/videos"
        style={{
          color: '#fff',
          textDecoration: 'underline',
          fontSize: '1.2rem',
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
