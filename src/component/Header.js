import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">VISION</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="purchase-btn">Purchase Now</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
