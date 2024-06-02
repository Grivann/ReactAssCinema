import React from 'react';

export default function Button({ text }) {
  const className = `flex items-center justify-center border border-white border-4 hover:bg-[#FA4A04] hover:border-0 text-white md:px-[18px] md:py-[31px] px-[14px] py-[20px] rounded-[10px] lg:w-[12%] w-[150px] h-[48px] mr-[3%] `;

  return (
    <button className={className}>
      {text}
    </button>
  );
}
