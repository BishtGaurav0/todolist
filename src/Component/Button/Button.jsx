import React from 'react';
import './Button.css'; 

const Button = ({ variant, children, onClick }) => {
  const className = variant === 'big' ? 'btn-big' : 'btn-small';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;