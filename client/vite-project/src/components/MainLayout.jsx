import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen font-sans grid grid-cols-[5rem_1fr_5rem] grid-rows-[4rem_1fr]">
      {/* Background image */}
      <div
        className="fixed inset-0 h-screen w-screen bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url(/assets/bg.jpg)" }}
      ></div>

      {/* Overlay */}
      <div
        className="fixed inset-0 h-screen w-screen opacity-60 z-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/bgdark.png)" }}
      ></div>

      {/* Left Sidebar */}
      <aside className="w-[8vh] z-30 row-span-2 bg-black bg-opacity-60 p-2 flex flex-col justify-between items-center gap-4 border-r border-r-[rgba(255,255,255,0.2)]">
        <div className="flex flex-col gap-3 mt-[17vh] justify-between items-center hover:cursor-pointer hover:opacity-100 transition-opacity duration-300">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`/assets/sp${i + 1}.png`}
              alt={`Icon ${i + 1}`}
              style={{
                width: "6.3vh",
                height: "4.3vh",
                marginBottom: "1.3vh",
                objectFit: "contain",
                opacity: "0.5",
              }}
            />
          ))}
          {[...Array(2)].map((_, i) => (
            <img
              key={i}
              src={`/assets/sp${i + 1}.svg`}
              alt={`Icon ${i + 1}`}
              style={{
                width: "4vh",
                height: "4.3vh",
                marginBottom: "1.3vh",
                objectFit: "fit-content",
                opacity: "0.5",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-4 bottom-50 justify-between items-center">
          <img
            src="/assets/sp3.svg"
            alt="sp3"
            style={{
              width: "2vh",
              height: "2vh",
              objectFit: "contain",
              marginBottom: "3vh",
              opacity: "0.5",
            }}
          />
          <img
            src="/assets/sp4.svg"
            alt="sp3"
            style={{
              width: "2vh",
              height: "2vh",
              objectFit: "contain",
              marginBottom: "1vh",
              opacity: "0.5",
            }}
          />
        </div>
      </aside>

      {/* Header */}
      <header className="z-40 col-span-1 h-[11vh] px-6 bg-black bg-opacity-100 text-white ml-[3vh]">
        <h3 className="inline-block text-sm mb-[2px] ">&#8918;</h3>
        <button>MULTIPLAYER /</button>
        <button>SERVER BROWSER /</button>
        <h1 className="text-[4vh] font-bold mt-[1px]">SERVER INFO</h1>
      </header>

      {/* Right Sidebar */}
      <aside className="w-[8vh] h-[100vh] z-30 row-span-2 bg-black bg-opacity-60 p-2 flex flex-col justify-start items-center gap-4 pt-[8vh]">
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`/assets/spr${num}.png`}
            alt={`Right Icon ${num}`}
            style={{
              height: "6vh",
              Width: "4.5vh",
              marginRight: "1vh",
              marginBottom: "3vh",
            }}
          />
        ))}
      </aside>

      {/* Main Content */}
      <main className="z-20 col-span-1 overflow-y-auto p-6 text-white bg-transparent ml-[3vh]">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
