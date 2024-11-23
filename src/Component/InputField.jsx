import React, { useContext } from "react";
import { Context } from "../Context/Context";

const InputField = () => {
  const { setInput,input} = useContext(Context);
  return (
    <div className="max-w-sm  relative m-8">
      
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        id="input"
        placeholder="Type something..."
        className="mt-1 block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
