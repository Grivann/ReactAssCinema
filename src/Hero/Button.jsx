import React from 'react';

export default function Button({ text }) {
  const className = ` border lg:border-white text-[#FA4A04] border-[#FA4A04] lg:border-4 border-2 hover:text-white hover:bg-[#FA4A04]  hover:border-0 lg:text-white px-4 py-2 rounded-[30px] lg:w-[14%] lg:h-[48px] lg:mr-[3%] w-[170px] h-[44px] mr-[20px]`;

  return (
    <button className={className}>
      {text}
    </button>
  );
}
