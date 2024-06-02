import React from 'react';

export default function Button({ text }) {
  const className = ` border border-white border-4 hover:bg-[#FA4A04] hover:border-0 text-white px-4 py-2 rounded-[30px] w-[14%] h-[48px] mr-[3%]`;

  return (
    <button className={className}>
      {text}
    </button>
  );
}
