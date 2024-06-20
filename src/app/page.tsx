"use client";

import React, { useState } from 'react';
import Image from "next/image";


export default function Home() {

  const [isClicked, setIsClicked] = useState(false);

  function handleMouseOver(e: React.MouseEvent<HTMLButtonElement>) {
    let x: number = Math.random() * 500 - 250;
    let y: number = Math.random() * 500 - 400;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handleButtonClick() {
    setIsClicked(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-10  p-24 bg-cyan-100 text-blue-700">
      <h1 className=" font-bold text-2xl md:text-4xl">
        {!isClicked ? "Will you go out with me?" : "See you soon!"}
      </h1>

      <Image
        src="/emm.gif"
        alt="shy gif"

        width={0}
        height={0}
        style={{ display: isClicked ? "none" : "block",  width: 'auto', height: '300px', transform: 'translate(-15px, 0)' }}
        unoptimized
        priority
      />
      <Image
        src="/love.gif"
        alt="love gif"
        width={0}
        height={0}
        style={{ display: !isClicked ? "none" : "block",  width: 'auto', height: '300px', transform: 'translate(-15px, 0)' }}
        unoptimized
        priority
      />
      <div className="grid grid-cols-4 justify-items-center gap-4 max-w-3xl">
        <button
          style={{ display: isClicked ? "none" : "block" }}
          onClick={handleButtonClick}
          className="button font-montserrat inline-block col-span-2 rounded-full bg-blue-700 w-40 pb-2 pt-2.5 text-base font-bold leading-normal text-cyan-100 shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-primary-2  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong "
        >
          Yes
        </button>
        <button
          style={{ display: isClicked ? "none" : "block" }}
          onMouseOver={handleMouseOver}
          onClick={handleMouseOver}
          className="button inline-block border-2 border-blue-700 col-span-2 rounded-full bg-cyan-100 w-40 pb-2 pt-2.5 text-base font-bold leading-normal text-blue-700 shadow-primary-3 transition duration-150 ease-in-out  motion-reduce:transition-none "
        >
          No
        </button>
        <button
          style={{ display: !isClicked ? "none" : "block" }}
          className="button font-montserrat inline-block col-span-4 rounded-full bg-blue-700 w-80 pb-2 pt-2.5 text-base font-bold leading-normal text-cyan-100 shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-primary-2  motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong "
        >
        Please DM me ♥
        </button>
      </div>
    </main>
  );
}
