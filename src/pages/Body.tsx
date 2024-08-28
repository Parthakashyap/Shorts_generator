"use client";
import MainContent from "@/components/mainContent";
import React, { useState } from "react";

const Body: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mx-auto text-green-200 border border-[#c8eed6]/25 shadow-lg shadow-[#4add80]/10 w-fit font-medium text-sm rounded-full  bg-gradient-to-b from-[#737b88]/20 to-[#191b1e]/20 p-[1.5px]">
        <div className="bg-[#15171a]/50 flex items-center space-x-1 py-1 px-2 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.99906 3.7335L3.3324 4.66683L4.26573 3.00016L3.3324 1.3335L4.99906 2.26683L6.66573 1.3335L5.7324 3.00016L6.66573 4.66683L4.99906 3.7335ZM12.9991 10.2668L14.6657 9.3335L13.7324 11.0002L14.6657 12.6668L12.9991 11.7335L11.3324 12.6668L12.2657 11.0002L11.3324 9.3335L12.9991 10.2668ZM14.6657 1.3335L13.7324 3.00016L14.6657 4.66683L12.9991 3.7335L11.3324 4.66683L12.2657 3.00016L11.3324 1.3335L12.9991 2.26683L14.6657 1.3335ZM8.8924 8.52016L10.5191 6.8935L9.10573 5.48016L7.47906 7.10683L8.8924 8.52016ZM9.57906 4.86016L11.1391 6.42016C11.3991 6.66683 11.3991 7.10016 11.1391 7.36016L3.35906 15.1402C3.09906 15.4002 2.66573 15.4002 2.41906 15.1402L0.859062 13.5802C0.599063 13.3335 0.599063 12.9002 0.859062 12.6402L8.63906 4.86016C8.89906 4.60016 9.3324 4.60016 9.57906 4.86016Z"
              fill="#BEFFD6"
            ></path>
          </svg>
          <span className="text-sm">Try Demo</span>
        </div>
      </div>

      <div className="p-4 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center ">
          YouTube Clip Maker
        </h1>
        <p className="flex items-center justify-center mt-2">
          Turn long YouTube videos into short clips instantly.
          <br />
          Intelligent summarization, auto-cropping, and
          <br />
          customized extraction. Edit your results easily.
        </p>
      </div>
      <img src="https://www.revid.ai/images/bg-gradient-blur.svg" alt="" className="absolute -top-2" />

      <MainContent/>

      
    </div>
  );
};

export default Body;
