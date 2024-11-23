import React from "react";
import ImageCard from "./Component/ImageCard";
import InputField from "./Component/InputField";

function App() {
  return (
    <div className="gap-1 flex flex-col justify-center items-center bg-gray-200">
      <InputField />
      <div className="flex flex-wrap gap-7 p-8 justify-center items-center">
        <ImageCard />
      </div>
    </div>
  );
}

export default App;
