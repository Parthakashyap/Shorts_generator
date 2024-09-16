import React, { useState } from "react";

const MainContent: React.FC = () => {
  const [isSummarizeOn, setIsSummarizeOn] = useState(false);
  const [isAutoCropOn, setIsAutoCropOn] = useState(false);
  const [isIllustrateOn, setIsIllustrateOn] = useState(false);
  
  const toggleSummarizeSwitch = () => setIsSummarizeOn((prev) => !prev);
  const toggleAutoCropSwitch = () => setIsAutoCropOn((prev) => !prev);
  const toggleIllustrateSwitch = () => setIsIllustrateOn((prev) => !prev);

  return (
    <section className="relative flex w-full">
      <div className="relative w-[7.5%] lg:w-[15%] xl:w-[15%] mr-auto my-auto mt-32 space-y-2"></div>
      <div className="w-full h-fit mx-auto relative">
        <div className="rounded-2xl shadow-[0_4px_24px_-6px_rgba(95,_163,_129,_0.29)] bg-gradient-to-bl from-[#4bde81]/25 to-[#5abcef]/25 p-px">
          <div className="bg-[#15171A]/90 backdrop-blur rounded-2xl">
            <h3 className="py-3 text-white text-center border-b border-[#262A2E] font">
              Generate Now
            </h3>
            <div className="relative flex w-full">
              <div className="w-full flex flex-col gap-3 p-6 max-w-[800px]">
                <label>Let's configure your video</label>
                <div className="bg-white p-4 rounded-md w-full">
                  <div className="flex gap-3 text-gray-700 font-medium">
                    <label>1. Enter a Youtube URL</label>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <input
                      type="text"
                      className="input text-neutral placeholder:text-gray-300 text-black font-normal outline-base-200 focus:outline-offset-[1px] outline outline-[1.5px] focus:outline-[1.5px] rounded-lg p-4"
                      placeholder="https://www.youtube.com/watch?v=MnrJzXM7a6o"
                    />
                    <small className="text-gray-400">
                      💡 Tip: Use a long Youtube video to create a short, engaging clip for social media
                    </small>
                  </div>
                </div>

                <div className="flex gap-2 flex-col md:flex-row md:items-center">
                  <button
                    className={`${
                      isSummarizeOn ? "bg-green-500" : "bg-gray-200"
                    } relative inline-flex h-[19px] w-[30px] cursor-pointer rounded-full transition-colors duration-200`}
                    role="switch"
                    onClick={toggleSummarizeSwitch}
                  >
                    <span
                      className={`${
                        isSummarizeOn ? "translate-x-full" : "translate-x-0"
                      } inline-block h-[15px] w-[15px] bg-white rounded-full`}
                    ></span>
                  </button>
                  <div className="ml-2">
                    <div className="text-gray-700">Have AI summarize the video</div>
                    <div className="text-xs text-gray-400">
                      An AI voice will be generated that will summarize the video.
                    </div>
                  </div>
                </div>
                <button className="inline-flex gap-1.5 items-center justify-center text-sm bg-gradient-to-r from-[#4bde81] via-[#7b61ff] to-[#5abcef] rounded-full text-white px-4 py-3 w-full mt-2">
                  Generate Video
                </button>
              </div>
              <div className="md:flex hidden p-6 pl-0 max-w-[300px]">
                <div className="flex flex-col w-full">
                  <p className="text-info text-sm">Output Example</p>
                  <div className="overflow-hidden rounded-lg shadow-xl">
                    <video
                      className="bg-white w-full cursor-pointer object-cover border border-white rounded-lg"
                      src=""
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-screen -top-48 -left-[50%] lg:-left-[35%] mx-auto -z-10"></div>
          <div className="bg-white/[0.05] border border-white/[0.06] absolute inset-0 rounded-2xl w-[105%] mx-auto h-[90%] -z-20"></div>
        </div>
      </div>
      <div className="relative w-[7.5%] lg:w-[15%] xl:w-[15%] ml-auto my-auto mt-32 space-y-2"></div>
    </section>
  );
};

export default MainContent;
