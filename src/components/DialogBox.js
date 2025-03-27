import React from "react";

const DialogBox = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
      <button className="block w-full bg-gray-300 text-black py-2 px-4 rounded-lg mb-2 hover:bg-gray-400 transition">
        Help Desk
      </button>
      <button className="block w-full bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition">
        Manage Resources
      </button>
    </div>
  );
};

export default DialogBox;
