"use client";

import React, { useRef } from 'react';

const TestComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Test Component</h2>
      <p className="text-3xl font-bold text-blue-600">This is a test.</p>
    </div>
  );
}

export default TestComponent; 