import { useState } from "react";
import MyButton from "./components/MyButton";

function App() {
  let [colour, setColour] = useState("black");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <MyButton
            name="Red"
            color="red"
            onClick={() => setColour("red")}
            textColor="white"
          />
          <MyButton
            name="Green"
            color="green"
            onClick={() => setColour("green")}
            textColor="white"
          />
          <MyButton
            name="Blue"
            color="blue"
            onClick={() => setColour("blue")}
            textColor="white"
          />
          <MyButton
            name="Lavender"
            color="lavender"
            onClick={() => setColour("lavender")}
          />
          <MyButton
            name="Yellow"
            color="yellow"
            onClick={() => setColour("yellow")}
          />
          <MyButton
            name="Black"
            color="black"
            onClick={() => setColour("black")}
            textColor="white"
          />
          <MyButton
            name="White"
            color="white"
            onClick={() => setColour("white")}
          />
          <MyButton
            name="Orange"
            color="orange"
            onClick={() => setColour("orange")}
          />
          <MyButton
            name="Cyan"
            color="cyan"
            onClick={() => setColour("cyan")}
          />
          <MyButton
            name="Purple"
            color="purple"
            onClick={() => setColour("purple")}
            textColor="white"
          />
          <MyButton
            name="Pink"
            color="pink"
            onClick={() => setColour("pink")}
          />
          <MyButton
            name="Grey"
            color="grey"
            onClick={() => setColour("grey")}
            textColor="white"
          />
          <MyButton
            name="Brown"
            color="brown"
            onClick={() => setColour("brown")}
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
