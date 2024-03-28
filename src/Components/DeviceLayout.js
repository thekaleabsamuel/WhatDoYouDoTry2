// DeviceLayout.js
import React from 'react';
import './DeviceLayout.css';

function DeviceLayout({ children }) {
  return (
    <div className="device">
      <div className="screen">
        {children}
      </div>
    </div>
  );
}

export default DeviceLayout;