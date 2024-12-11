import { useState } from "react";

function App() {
  let [colour, setColour] = useState("black");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColour("lavender")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColour("yellow")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColour("black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColour("white")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColour("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColour("cyan")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColour("purple")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColour("pink")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColour("grey")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColour("brown")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
