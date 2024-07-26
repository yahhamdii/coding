import React from 'react';

const Label = ({ value, color }) => {
  return (
    <div style={{ color: color }}>
      {value}
    </div>
  );
};

export default Label;