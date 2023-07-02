import React from "react";

const Chats = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="flex px-4 items-center space-x-3 py-3   cursor-pointer mb-3"
        >
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="  text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
              See tou tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
