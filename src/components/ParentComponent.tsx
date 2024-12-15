"use client";

import React from 'react';
import StatCard from './StatCard';

const ParentComponent: React.FC = () => {
  return (
    <div>
      <StatCard title="Example Title" value={42} />
    </div>
  );
}

export default ParentComponent; 