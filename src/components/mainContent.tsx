import React, { useState } from "react";

const MainContent: React.FC = () => {
  // State to manage switch button
  const [isSummarizeOn, setIsSummarizeOn] = useState(false);
  const [isAutoCropOn, setIsAutoCropOn] = useState(false);
  const [isillustrateOn, setIsillutrateOn] = useState(false);
  const toggleSummarizeSwitch = () => setIsSummarizeOn((prev) => !prev);
  const toggleAutoCropSwitch = () => setIsAutoCropOn((prev) => !prev);
  const toggleillustrateSwitch = () => setIsillutrateOn((prev) => !prev);

  return (
    <section className="relative flex w-full">
      <div className="relative w-[7.5%] lg:w-[15%] xl:w-[15%] mr-auto my-auto mt-32 space-y-2"></div>
      <div className="w-full h-fit mx-auto relative">
        <div className="rounded-2xl shadow-[0_4px_24px_-6px_rgba(95,_163,_129,_0.29)] bg-gradient-to-bl from-[#4bde81]/25 to-[#5abcef]/25 p-px">
          <div className="bg-[#15171A]/90 backdrop-blur rounded-2xl">
            <h3 className="py-3 text-white text-center border-b border-[#262A2E] font">
              Generate Now
            </h3>
            <div>
              <div className="relative flex w-full">
                <div className="w-full flex flex-col gap-3 p-6 max-w-[800px]">
                  <label htmlFor="">Let &#x27;s configure your video</label>
                  <div className="bg-white p-4 rounded-md w-full flex-[100%]">
                    <div className="flex gap-3 text-gray-700 font-medium flex-grow">
                      <label>1. Enter a Youtube URL</label>
                    </div>
                    <div className="flex flex-col gap-4 text-info font-medium flex-grow mt-4">
                      <input
                        type="text"
                        className="input text-neutral placeholder:text-gray-300 font-normal outline-base-200 focus:outline-offset-[1px] outline outline-[1.5px] focus:outline-[1.5px] focus:base-200 rounded-lg bg-transparent overflow-hidden text-base resize-none p-4"
                        placeholder="https://www.youtube.com/watch?v=MnrJzXM7a6o"
                        value=""
                      />
                      <small className="text-gray-400">
                        💡 Tip: Use a long Youtube video to create a short,
                        engaging clip for social media
                      </small>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md w-full flex-[100%]">
                    <section className="flex items-start gap-3">
                      <div className="flex flex-col gap-4 text-gray-700 font-medium">
                        <label>2. Pick your parameters</label>
                        <div className="flex flex-col gap-4 flex-wrap">
                          <div>
                            <div className="flex gap-2 flex-col md:flex-row md:items-center">
                              <button
                                className={`${
                                  isSummarizeOn ? "bg-green-500" : "bg-gray-200"
                                } relative inline-flex h-[19px] w-[30px] cursor-pointer shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                                role="switch"
                                type="button"
                                aria-checked={isSummarizeOn}
                                onClick={toggleSummarizeSwitch}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`${
                                    isSummarizeOn
                                      ? "translate-x-full"
                                      : "translate-x-0"
                                  } pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                ></span>
                              </button>

                              <div className="flex flex-col ml-2">
                                <div className="text-gray-700 text-md">
                                  Have AI to summarize the video
                                </div>
                                <div className="text-info text-gray-400 text-xs">
                                  An AI voice will be generated that will
                                  summarize the video
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="flex gap-2 flex-col md:flex-row md:items-center">
                              <button
                                className={`${
                                  isAutoCropOn ? "bg-green-500" : "bg-gray-200"
                                } relative inline-flex h-[19px] w-[30px] cursor-pointer shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                                role="switch"
                                type="button"
                                aria-checked={isAutoCropOn}
                                onClick={toggleAutoCropSwitch}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`${
                                    isAutoCropOn
                                      ? "translate-x-full"
                                      : "translate-x-0"
                                  } pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                ></span>
                              </button>
                              <div className="flex flex-col ml-2">
                                <div className="text-gray-700 text-md">
                                  Auto-crop video
                                </div>
                                <div className="text-info text-gray-400 text-xs">
                                  Our AI will auto-crop the video to the most
                                  relevant part, costs one more credit
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                              <div className="flex gap-2 flex-col md:flex-row md:items-center">
                                <input
                                  className="mt-2 w-full max-w-[150px] h-10 input text-neutral placeholder:text-gray-300 font-normal outline-base-200 focus:outline-offset-[1px] outline outline-[1.5px] focus:outline-[1.5px] focus:base-200 rounded-lg bg-transparent overflow-hidden text-base resize-none p-2 "
                                  placeholder="my product"
                                />
                                <div className="flex flex-col ml-2">
                                  <div className="text-gray-700 text-md">
                                    Specify what you would like to get extracted
                                  </div>
                                  <div className="text-info text-gray-400 text-xs">
                                    Our AI will use this to look htmlFor the
                                    specific content you &#x27;re interested in
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 flex-col md:flex-row md:items-center">
                                <div>
                                  <div
                                    className="relative group"
                                    data-headlessui-state=""
                                  >
                                    <button
                                      className="bg-white relative w-full rounded-xl py-1.5 pr-5 text-left text-neutral shadow-sm border border-base-100 ring-2 ring-inset ring-transparent focus:outline-none focus:ring-2 focus:ring-[#ddd] sm:text-sm sm:leading-6 "
                                      id="headlessui-listbox-button-:Rpcl16d4h7m:"
                                      type="button"
                                      aria-haspopup="listbox"
                                      aria-expanded="false"
                                      data-headlessui-state=""
                                    >
                                      <span className="flex items-center">
                                        <span className="ml-3 max-w-[85%] block truncate">
                                          1
                                        </span>
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <svg
                                          className="h-5 w-5 text-gray-400"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="flex flex-col ml-2">
                                  <div className="text-gray-700 text-md">
                                    How many extracts do you want?
                                  </div>
                                  <div className="text-info text-gray-400 text-xs">
                                    Our AI will find the best parts and will
                                    create custom videos from them
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 flex-col md:flex-row md:items-center">
                              <button
                                className={`${
                                  isillustrateOn ? "bg-green-500" : "bg-gray-200"
                                } relative inline-flex h-[19px] w-[30px] cursor-pointer shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                                role="switch"
                                type="button"
                                aria-checked={isillustrateOn}
                                onClick={toggleillustrateSwitch}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`${
                                    isillustrateOn
                                      ? "translate-x-full"
                                      : "translate-x-0"
                                  } pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                ></span>
                              </button>
                                <div className="flex flex-col ml-2">
                                  <div className="text-gray-700 text-md">
                                    Add video footage to illustrate the content
                                  </div>
                                  <div className="text-info text-gray-400 text-xs">
                                    Our system will search htmlFor relevant
                                    video footage to illustrate the content
                                  </div>
                                </div>
                              </div>
                            </div>
                          {/* Add other options here */}
                        </div>
                      </div>
                    </section>
                  </div>
                  <small className="text-[#828388]">
                    💡 Tip: use short, punctuated sentences.
                  </small>
                  <button className="inline-flex gap-1.5 items-center justify-center whitespace-nowrap z-0 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black border border-black relative px-4 w-full my-2 py-3 bg-gradient-to-r from-[#4bde81] via-[#7b61ff] to-[#5abcef] rounded-full text-white font-semibold transition-all hover:shadow-xl hover:outline hover:outline-4 hover:outline-white/10">
                    Generate Video
                  </button>
                  <span className="text-center text-sm text-[#c6c7c8]">
                    <span className="opacity-60 ml-4 gap-1 text-xs items-center">
                      Start for free. 
                      <strong> No signup required.</strong>
                    </span>
                  </span>
                </div>
                <div className="md:flex hidden p-6 pl-0 max-w-[300px]">
                  <div className="w-full h-fit flex lg:flex-[60%] xl:flex-[30%] gap-4 ">
                    <div className="flex flex-col w-full gap-4 ">
                      <div className="flex gap-2">
                        <p className="text-info text-sm relative text-neutral-dark">
                          Output Example
                        </p>
                      </div>
                      <div className="flex flex-col bg-transparent max-w-[350px]">
                        <div className="overflow-hidden shadow-xl rounded-lg">
                          <video
                            className="bg-white w-full cursor-pointer object-cover border border-white rounded-lg"
                            src=""
                          ></video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-[900px] -top-48 -left-[50%] lg:-left-[35%] mx-auto -z-10"></div>
          <div className="bg-white/[0.05] border border-white/[0.06] absolute inset-0 -left-[2.5%] rounded-2xl w-[105%] mx-auto h-[90%] my-auto -z-20"></div>
        </div>
      </div>
      <div className="relative w-[7.5%] lg:w-[15%] xl:w-[15%] ml-auto my-auto mt-32 space-y-2"></div>
    </section>
  );
};

export default MainContent;
