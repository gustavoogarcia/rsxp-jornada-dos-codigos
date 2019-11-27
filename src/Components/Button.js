import React from 'react';

export default function Button({ classNames, disabled, label, icon, onClick }) {

  return (
    <button 
      className={`button${classNames ? ` ${classNames}` : ""}`} 
      onClick={e => { e.preventDefault(); onClick && onClick(e); }} 
      disabled={disabled} 
    >
      {icon && <i className={`icon-${icon}`} />} {label && label}
    </button>
  );
};
