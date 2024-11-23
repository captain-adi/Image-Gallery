import React, { useContext } from "react";
import { Context } from "../Context/Context";

const ImageCard = () => {
  const { apiData } = useContext(Context);

  return (
    <>
      {apiData.map((data) => ( 
        <div  id={data.id} className="max-w-sm border bg-white  rounded-lg shadow-lg overflow-hidden">
          <img
        src={data.largeImageURL}
        alt="Post"
        className="w-full h-48 object-cover"
      />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{data.user}</h3>
              <button className="text-sm text-blue-500">Follow</button>
            </div>
            <div className="flex items-center mt-3 space-x-4">
              <button className="flex items-center text-gray-500 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15s7-4.686 7-9-3.134-5-7-5-7 2.686-7 5 7 9 7 9z" />
                </svg>
                <span className="ml-1 text-sm">{data.likes}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3a5 5 0 1 1 0 10A5 5 0 0 1 8 3zm0 1a4 4 0 1 0 0 8A4 4 0 0 0 8 4zm3.5 5.5H8a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z" />
                </svg>
             
                <span className="ml-1 text-sm">{data.comments} Comment</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageCard;
