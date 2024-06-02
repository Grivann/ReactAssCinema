import React from 'react';

export default function Button({ text, colorClass, borderColorClass }) {
  const className = `bg-[#FA4A04] text-white px-4 py-2 rounded-[30px] w-[14%] h-[48px] mr-[3%]`;

  return (
    <button className={className}>
      {text}
    </button>
  );
}
