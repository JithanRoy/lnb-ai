/* src/app/auth/layout.tsx */

import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-container">
      <div className="auth-sidebar">
        {/* <img src="/path/to/logo.png" alt="Local New Business Logo" className="logo" /> */}
        <h2>Do you want to grow your business?</h2>
        <p>Join us now. Sign up to access the latest contact details for new companies and grow your business. Our platform is updated daily. Register today!</p>
      </div>
      <div className="auth-content">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
