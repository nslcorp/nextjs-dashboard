'use client';
import { Metadata } from "next";
import { useState } from 'react';



export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>template section</h1>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <div>Count: {count}</div>

      <div>{children}</div>
    </div>
  );
}
