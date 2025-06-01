import { useEffect, useState } from "react";
import axios from "axios";

function ServerInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/server-info")
      .then((response) => setInfo(response.data))
      .catch((err) => console.error("Failed to fetch server info:", err));
  }, []);

  if (!info) return <div className="text-lg">Loading server info...</div>;

  return (
    <div className="bg-black/30 p-6 rounded-xl shadow-xl w-[127vh] h-[82.4vh] max-w-5xl mt-[8vh] mb-[1px]">
      <div className="text-[3.1vh] font-[600] text-white my-1 pb-2 pb-2 ">
        ! RC3-BASEMAPS
      </div>
      <img
        src="assets\flag.png"
        alt="flag"
        className="inline-block align-middle"
        style={{ width: "2.3vh", height: "1.72vh", marginRight: "1.15vh" }}
      />
      <div className="inline-block align-middle text-[2vh] text-white">
        CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ
      </div>
      <div className="align-middle text-[1.5vh] text-white mb-[2vh]">
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request,
        Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
      </div>
      <div className="flex justify-between items-center mb-[2vh] text-[14px]">
        <div className="w-[28vh] h-[4.8vh] mr-[1vh] font-rajdhani flex justify-center items-center text-white px-4 py-2 bg-transparent border border-white border-[rgba(255,255,255,0.2)] hover:!bg-white hover:!text-black transition-colors duration-300 cursor-pointer">
          JOIN
        </div>

        <div className="w-[28vh] h-[4.8vh] mr-[1vh] font-rajdhani flex justify-center items-center text-white px-4 py-2 bg-transparent border border-white border-[rgba(255,255,255,0.2)] hover:!bg-white hover:!text-black transition-colors duration-300 cursor-pointer">
          SPECTATE
        </div>
        <div className="w-[28vh] h-[4.8vh] mr-[1vh] font-rajdhani flex justify-center items-center text-white px-4 py-2 bg-transparent border border-white border-[rgba(255,255,255,0.2)] hover:!bg-white hover:!text-black transition-colors duration-300 cursor-pointer">
          JOIN AS COMMANDER
        </div>
        <div className="w-[28vh] h-[4.8vh] mr-[1vh] font-rajdhani flex justify-center items-center text-white px-4 py-2 bg-transparent border border-white border-[rgba(255,255,255,0.2)] hover:!bg-white hover:!text-black transition-colors duration-300 cursor-pointer">
          {" "}
          ★ 13756
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 w-1/2 mb-[2.5vh]">
        <div className="h-[1.6vh]">
          <span className="font-[600] text-sm">PLAYERS</span>
        </div>
        <div className="h-[1.6vh]">
          <span className="font-[600] text-sm">PING</span>
        </div>
        <div className="h-[1.6vh]">
          <span className="font-[600] text-sm">TICKRATE</span>
        </div>
        <div>
          <span className="font-[600] text-[2.5vh] ">60/64</span>
        </div>
        <div>
          <span className="font-[600] text-[2.5vh] ">104ms</span>
        </div>
        <div>
          <span className="font-[600] text-[2.5vh] ">60Hz</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-sm mb-6 w-2/3">
        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-2">
            Settings
          </h3>
          <ul className=" text-sm text-gray-300 ">
            {Object.entries(info.settings).map(([key, value]) => (
              <li
                className="border-b border-gray-600 pb-2 mb-2 border-b-[rgba(255,255,255,0.2)]"
                key={key}
              >
                <span className="text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-2">
            Advanced Settings
          </h3>
          <ul className=" text-sm text-gray-300">
            {Object.entries(info.advanced).map(([key, value]) => (
              <li
                className="border-b border-gray-600 pb-2 mb-2 border-b-[rgba(255,255,255,0.2)]"
                key={key}
              >
                <span className="text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-orange-300 mb-2">Rules</h3>
          <ul className=" text-sm text-gray-300">
            {Object.entries(info.rules).map(([key, value]) => (
              <li
                className="border-b border-gray-600 pb-2 mb-2 border-b-[rgba(255,255,255,0.2)]"
                key={key}
              >
                <span className="text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 gap-2 mt-[5vh]">
        <div className="w-[28vh] h-[15.5vh] bg-black z-50 mb-[3vh]">
          <img
            src="assets/MR1.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 flex flex-col justify-center z-51">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">DAWNBREAKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR2.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">PROPAGANDA</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR3.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">OPERATION LOCKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR4.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">LANCANG DAM</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black z-50">
          <img
            src="assets/MR1.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 flex flex-col justify-center z-51">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">DAWNBREAKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR2.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">PROPAGANDA</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR3.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">OPERATION LOCKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR4.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">LANCANG DAM</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black z-50">
          <img
            src="assets/MR1.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 flex flex-col justify-center z-51">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">DAWNBREAKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR2.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">PROPAGANDA</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR3.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">OPERATION LOCKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR4.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">LANCANG DAM</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black z-50">
          <img
            src="assets/MR1.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 flex flex-col justify-center z-51">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">DAWNBREAKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR2.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">PROPAGANDA</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR3.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">OPERATION LOCKER</div>
          </div>
        </div>

        <div className="w-[28vh] h-[15.5vh] bg-black">
          <img
            src="assets/MR4.png"
            alt="mr1"
            className="w-full h-[7.75vh] object-cover"
          />

          <div className="w-[28vh] h-[7.75vh]  text-white px-2 py-1 flex flex-col justify-center">
            <div className="text-xs font-semibold">CONQUEST LARGE</div>
            <div className="text-xs">LANCANG DAM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerInfo;
