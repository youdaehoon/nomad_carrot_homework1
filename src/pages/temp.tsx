import React from "react";

const Temp = () => {
  return (
    <div className=" bg-purple-100 w-screen h-screen py-16  grid grid-cols-3 gap-7 px-5 items-center">
      <div className="flex flex-col min-h-[500px]  bg-white p-5 ">
        <h2 className="text-lg font-bold">Weather</h2>
        <div className="w-full mt-5 font-semibold space-y-5">
          <div className="flex w-full bg-white border-2 border-gray-800 justify-between rounded-xl px-3 py-1 border-b-4">
            <div>
              <h3 className="text-sm">Casius</h3>
              <span className="text-xs">Mars, 12Am </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-slate-200" />
              <h4>85 &#176;</h4>
            </div>
          </div>
          <div className="flex w-full bg-yellow-500 border-2 border-gray-800 justify-between rounded-xl px-3 py-1 border-b-4">
            <div>
              <h3 className="text-sm">Dlacria </h3>
              <span className="text-xs">Mars, 12Am </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-slate-200" />
              <h4>85 &#176;</h4>
            </div>
          </div>
          <div className="flex w-full bg-teal-500 border-2 border-gray-800 justify-between rounded-xl px-3 py-1 border-b-4">
            <div>
              <h3 className="text-sm">New York</h3>
              <span className="text-xs">USA, 12Am </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-slate-200" />
              <h4>85 &#176;</h4>
            </div>
          </div>
          <div className="flex w-full bg-red-500 text-white border-2 border-gray-800 justify-between rounded-xl px-3 py-1 border-b-4">
            <div>
              <h3 className="text-sm">Casius</h3>
              <span className="text-xs">Mars, 12Am </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-slate-200" />
              <h4>85 &#176;</h4>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="w-8 h-8 text-lg  border rounded-full flex items-center justify-center border-b-4  border-gray-900 ">
            +
          </div>
        </div>
      </div>
      <div className="flex flex-col min-h-[500px]  bg-white p-5 px-4">
        <div className="w-8 h-8  border rounded-full flex items-center justify-center border-b-4 border-gray-900 ">
          X
        </div>
        <h3 className="text-center text-xs">SIMPLE TAG</h3>
        <h2 className="text-center font-semibold">Work with best designers</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-5">
          <div className="border px-7 py-10 border-gray-900 rounded-xl flex items-center justify-center bg-yellow-500">
            <div className="w-8 h-8 bg-slate-500" />
          </div>
          <div className="border px-7 py-10 border-gray-900 rounded-xl flex items-center justify-center bg-teal-500">
            <div className="w-8 h-8 bg-slate-500" />
          </div>
          <div className="border px-7 py-10 border-gray-900 rounded-xl flex items-center justify-center bg-red-300">
            <div className="w-8 h-8 bg-slate-500" />
          </div>
          <div className="border px-7 py-10 border-gray-900 rounded-xl flex items-center justify-center bg-red-500">
            <div className="w-8 h-8 bg-slate-500" />
          </div>
        </div>
        <button className="mt-5 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-900">
          Let&apos; get it done
        </button>
      </div>
      <div className="flex flex-col  min-h-[500px] bg-yellow-500 p-5 px-4">
        <div className="relative px-8 text-center font-semibold">
          <div className="absolute left-0 w-8 h-8 bg-white  border rounded-full flex items-center justify-center border-b-4 border-gray-900 ">
            X
          </div>
          Friends
        </div>
        <div className="relative flex items-center mt-5 group">
          <div className="absolute right-2">↙</div>
          <input
            className="w-full pr-2 border rounded-md border-gray-900 border-b-4 "
            type="text"
            placeholder="Search with love ..."
          />
        </div>
        <div className="mt-5 space-y-3 ">
          <div className="p-2 border border-gray-900 bg-white flex justify-between rounded-md">
            <div className="flex items-center space-x-1 ite">
              <div className=" border w-8 h-8 rounded-full bg-slate-300  border-gray-900 " />
              <div>
                <h3 className="font-semibold">Bill Rizer</h3>
                <h4 className="text-xs">Pianet Designer</h4>
              </div>
            </div>
            <button className="border border-b-2 border-gray-900 text-xs py-0 bg-yellow-400 px-2 rounded-xl">
              invite
            </button>
          </div>
          <div className="p-2 border border-gray-900 bg-white flex justify-between rounded-md">
            <div className="flex items-center space-x-1 ite">
              <div className=" border w-8 h-8 rounded-full bg-slate-300  border-gray-900 " />
              <div>
                <h3 className="font-semibold">Bill Rizer</h3>
                <h4 className="text-xs">Pianet Designer</h4>
              </div>
            </div>
            <button className="border border-b-2 border-gray-900 text-xs py-0 bg-yellow-400 px-2 rounded-xl">
              invite
            </button>
          </div>
          <div className="p-2 border border-gray-900 bg-white flex justify-between rounded-md">
            <div className="flex items-center space-x-1 ite">
              <div className=" border w-8 h-8 rounded-full bg-slate-300  border-gray-900 " />
              <div>
                <h3 className="font-semibold">Bill Rizer</h3>
                <h4 className="text-xs">Pianet Designer</h4>
              </div>
            </div>
            <button className="border border-b-2 border-gray-900 text-xs py-0 bg-yellow-400 px-2 rounded-xl">
              invite
            </button>
          </div>
          <div className="p-2 border border-gray-900 bg-white flex justify-between rounded-md">
            <div className="flex items-center space-x-1 ite">
              <div className=" border w-8 h-8 rounded-full bg-slate-300  border-gray-900 " />
              <div>
                <h3 className="font-semibold">Bill Rizer</h3>
                <h4 className="text-xs">Pianet Designer</h4>
              </div>
            </div>
            <button className="border border-b-2 border-gray-900 text-xs py-0 bg-yellow-400 px-2 rounded-xl">
              invite
            </button>
          </div>
          <div className="p-2 border border-gray-900 bg-white flex justify-between rounded-md">
            <div className="flex items-center space-x-1 ite">
              <div className=" border w-8 h-8 rounded-full bg-slate-300  border-gray-900 " />
              <div>
                <h3 className="font-semibold">Bill Rizer</h3>
                <h4 className="text-xs">Pianet Designer</h4>
              </div>
            </div>
            <button className="border border-b-2 border-gray-900 text-xs py-0 bg-yellow-400 px-2 rounded-xl">
              invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
