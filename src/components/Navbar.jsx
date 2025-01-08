import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: '#fff',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    }}>
      <div>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Koti</a>
        <a href="#experience" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Kokemus</a>
        <a href="#education" style={{ color: '#fff', textDecoration: 'none' }}>Koulutus</a>
      </div>
      <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <a href="mailto:juho.jaervi@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>Ota yhteyttä</a>
      </div>
    </nav>
  );
};

export default Navbar;