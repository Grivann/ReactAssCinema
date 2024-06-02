import React from 'react';

export default function Button({ text, colorClass, borderColorClass }) {
  const className = `flex items-center justify-center bg-[#FA4A04] text-white px-[18px] py-[31px] rounded-[10px] w-[12%] h-[48px] mr-[3%] `;

  return (
    <button className={className}>
      {text}
    </button>
  );
}
