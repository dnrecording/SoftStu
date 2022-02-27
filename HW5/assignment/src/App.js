import "./App.css";
import React, { useState } from "react";

function App() {
  const memberArray = [0, 0, 0, 0, 0];

  const [votingCount, setvotingCount] = useState(memberArray);
  let memberCount = 5;

  const vote = (index) => {
    if (votingCount[index] >= memberCount) {
      alert("Fail!: Vote number is bigger than member number!");
    } else {
      setvotingCount((existingItems) => {
        return existingItems.map((item, j) => {
          return j === index ? item + 1 : item;
        });
      });
    }
  };

  const unvote = (index) => {
    if (votingCount[index] <= 0) {
      alert("Fail!: Vote number is less than 0!");
    } else {
      setvotingCount((existingItems) => {
        return existingItems.map((item, j) => {
          return j === index ? item - 1 : item;
        });
      });
    }
  };

  return (
    <div>
      <div class=" flex flex-col items-center h-max bg-gradient-to-br from-coral-100 to-coral-400">
        {/* border screen */}
        {/* Personal card */}
        <div class="flex flex-col bg-white font-semibold text-center rounded-3xl shadow-lg p-7 max-w-3xl my-5">
          <img
            class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto object-cover"
            src="https://sv1.picz.in.th/images/2022/01/30/npzB6Q.jpg"
            alt="product designer"
          ></img>
          <h1 class="text-lg text-gray-800"> Kanittha Sasipreyajun </h1>
          <h3 class="text-sm text-gray-600 "> ID: 61010014 </h3>
          <p class="text-xs text-gray-400 mt-4 max-w-3xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis lectus quis dui eleifend egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed ac urna venenatis, consectetur elit ac, volutpat ipsum.
            Aliquam placerat suscipit volutpat. Mauris quis congue diam. Sed at
            lacus nec est molestie interdum. Donec scelerisque elementum auctor.
            Integer quis justo accumsan, ullamcorper tellus id, rutrum ipsum.{" "}
          </p>
          <br></br>
          <div class="flex justify-evenly items-center max-w-3xl">
            <button
              class="bg-emerald-400 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide mr-2"
              onClick={() => vote(0)}
            >
              Vote
            </button>
            <h2 class="text-2xl font-bold text-slate-900">{votingCount[0]}</h2>
            <button
              class="bg-red-500 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide ml-2"
              onClick={() => unvote(0)}
            >
              Unvote
            </button>
          </div>
        </div>
        {/* end Personal card */}

        {/* Personal card */}
        <div class="flex flex-col bg-white font-semibold text-center rounded-3xl shadow-lg p-7 max-w-3xl my-5">
          <img
            class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto object-cover"
            src="https://sv1.picz.in.th/images/2022/02/06/nMEDfv.png"
            alt="product designer"
            style={{"object-position": "center 5px"}}
          ></img>
          <h1 class="text-lg text-gray-800"> Pubodin Tieanthong </h1>
          <h3 class="text-sm text-gray-600 "> ID: 62010711 </h3>
          <p class="text-xs text-gray-400 mt-4 max-w-3xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis lectus quis dui eleifend egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed ac urna venenatis, consectetur elit ac, volutpat ipsum.
            Aliquam placerat suscipit volutpat. Mauris quis congue diam. Sed at
            lacus nec est molestie interdum. Donec scelerisque elementum auctor.
            Integer quis justo accumsan, ullamcorper tellus id, rutrum ipsum.{" "}
          </p>
          <br></br>
          <div class="flex justify-evenly items-center max-w-3xl">
            <button
              class="bg-emerald-400 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide mr-2"
              onClick={() => vote(1)}
            >
              Vote
            </button>
            <h2 class="text-2xl font-bold text-slate-900">{votingCount[1]}</h2>
            <button
              class="bg-red-500 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide ml-2"
              onClick={() => unvote(1)}
            >
              Unvote
            </button>
          </div>
        </div>
        {/* end Personal card */}

        {/* Personal card */}
        <div class="flex flex-col bg-white font-semibold text-center rounded-3xl shadow-lg p-7 max-w-3xl my-5">
          <img
            class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto object-cover"
            src="https://sv1.picz.in.th/images/2022/01/29/nXUVB0.jpg"
            alt="product designer"
            style={{"object-position": "center 5px"}}
          ></img>
          <h1 class="text-lg text-gray-800"> Weeravit Srisuntikanaporn </h1>
          <h3 class="text-sm text-gray-600 "> ID: 62010838 </h3>
          <p class="text-xs text-gray-400 mt-4 max-w-3xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis lectus quis dui eleifend egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed ac urna venenatis, consectetur elit ac, volutpat ipsum.
            Aliquam placerat suscipit volutpat. Mauris quis congue diam. Sed at
            lacus nec est molestie interdum. Donec scelerisque elementum auctor.
            Integer quis justo accumsan, ullamcorper tellus id, rutrum ipsum.{" "}
          </p>
          <br></br>
          <div class="flex justify-evenly items-center max-w-3xl">
            <button
              class="bg-emerald-400 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide mr-2"
              onClick={() => vote(2)}
            >
              Vote
            </button>
            <h2 class="text-2xl font-bold text-slate-900">{votingCount[2]}</h2>
            <button
              class="bg-red-500 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide ml-2"
              onClick={() => unvote(2)}
            >
              Unvote
            </button>
          </div>
        </div>
        {/* end Personal card */}

        {/* Personal card */}
        <div class="flex flex-col bg-white font-semibold text-center rounded-3xl shadow-lg p-7 max-w-3xl my-5">
          <img
            class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto object-cover"
            src="https://sv1.picz.in.th/images/2022/01/30/np0ESb.jpg"
            alt="product designer"
            style={{"object-position": "center -15px"}}
          ></img>
          <h1 class="text-lg text-gray-800"> Siwakon Phetnoi </h1>
          <h3 class="text-sm text-gray-600 "> ID: 62010882 </h3>
          <p class="text-xs text-gray-400 mt-4 max-w-3xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis lectus quis dui eleifend egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed ac urna venenatis, consectetur elit ac, volutpat ipsum.
            Aliquam placerat suscipit volutpat. Mauris quis congue diam. Sed at
            lacus nec est molestie interdum. Donec scelerisque elementum auctor.
            Integer quis justo accumsan, ullamcorper tellus id, rutrum ipsum.{" "}
          </p>
          <br></br>
          <div class="flex justify-evenly items-center max-w-3xl">
            <button
              class="bg-emerald-400 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide mr-2"
              onClick={() => vote(3)}
            >
              Vote
            </button>
            <h2 class="text-2xl font-bold text-slate-900">{votingCount[3]}</h2>
            <button
              class="bg-red-500 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide ml-2"
              onClick={() => unvote(3)}
            >
              Unvote
            </button>
          </div>
        </div>
        {/* end Personal card */}

        {/* Personal card */}
        <div class="flex flex-col bg-white font-semibold text-center rounded-3xl shadow-lg p-7 max-w-3xl my-5">
          <img
            class="mb-3 w-48 h-48 rounded-full shadow-lg mx-auto"
            src="https://sv1.picz.in.th/images/2022/02/06/nMBP8Z.jpg"
            alt="product designer"
          ></img>
          <h1 class="text-lg text-gray-800"> Siwat Phrommak </h1>
          <h3 class="text-sm text-gray-600 "> ID: 62010884 </h3>
          <p class="text-xs text-gray-400 mt-4 max-w-3xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis lectus quis dui eleifend egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed ac urna venenatis, consectetur elit ac, volutpat ipsum.
            Aliquam placerat suscipit volutpat. Mauris quis congue diam. Sed at
            lacus nec est molestie interdum. Donec scelerisque elementum auctor.
            Integer quis justo accumsan, ullamcorper tellus id, rutrum ipsum.{" "}
          </p>
          <br></br>
          <div class="flex justify-evenly items-center max-w-3xl">
            <button
              class="bg-emerald-400 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide mr-2"
              onClick={() => vote(4)}
            >
              Vote
            </button>
            <h2 class="text-2xl font-bold text-slate-900">{votingCount[4]}</h2>
            <button
              class="bg-red-500 w-24 h-10 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide ml-2"
              onClick={() => unvote(4)}
            >
              Unvote
            </button>
          </div>
        </div>
        {/* end Personal card */}

        {/* end border screen */}
      </div>
      {/* end template */}
    </div>
  );
}

export default App;
